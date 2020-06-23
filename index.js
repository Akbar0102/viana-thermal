const bodyParser = require('body-parser');
const express = require('express');
const path = require('path');
const hbs = require('hbs');
const fs = require('fs');
const io = require('socket.io')(8090);
const watch = require('node-watch');

const app = express();

const db = require('./config/db');
const web = require('./routes/web');
const admin = require('./routes/admin.routes');

hbs.registerPartials("./views/partials");
app.set('view-engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(express.static("./public"));
app.use('/', web);
app.use('/api', admin);

//read filename and then split filename
function getSplitName(faceinfo){
  let filename = faceinfo.split("\\");
  //let res = faceinfo.split(/_|\\/);
  //let newtime = res[6].slice(0,2)+":"+res[6].slice(2,4)+":"+res[6].slice(-2);
  let splitName = filename[filename.length-1].split('_');
  let newtime = splitName[3].slice(0,2)+":"+splitName[3].slice(2,4)+":"+splitName[3].slice(-2);

  let obj = {
    dir: filename[filename.length-2],
    filename: filename[filename.length-1],
    date: splitName[2],
    time: newtime,
    temp: splitName[5].slice(0,6)
  }

  return obj;
}

//namespace untuk face
//const face = io.of('/face');
io.on('connection', (socket) =>{
  let object = '';
  //watcher folder preview - root
  const watcher_info = watch('./public/WLIR/Preview', {recursive: true}, function(evt, name) {
    if (evt == 'update') {
      var stats = fs.statSync(name); //ada objek baru, ambil statusnya
      if(!stats.isDirectory()){ //kalau folder baru, tidak perlu di ambil data filename nya untuk d split
        console.log('root '+name.split("\\"));
        try {
          object = getSplitName(name); //split nama file, untuk diambil data-datanya
          //insert ke db
          var cat = {
            device: 'DEV01',
            temperature: object.temp,
            image: `/WLIR/Preview/${object.dir}/${object.filename}`,
            date: object.date,
            time: object.time,
            type: 'normal'
          };
          var query = db.query('INSERT INTO tb_face SET ?', cat, function(err,
            result) {
            console.log(result);
          });
        } catch (error) {
          console.log('Error: ', error.message);
        }
        console.log(object);  
        socket.emit('data', object);
      }
    }
  });

  //watcher folder reminder - root (alert)
  const watcher_reminder = watch('./public/WLIR/Reminder', {recursive: true}, function(evt, name){
    if (evt == 'update') {
      var stats = fs.statSync(name); //ada objek baru, ambil statusnya
      if(!stats.isDirectory()){ //kalau folder baru, tidak perlu di ambil data filename nya untuk d split
        console.log('root '+name.split("\\"));
        try {
          object = getSplitName(name); //split nama file, untuk diambil data-datanya
          //insert ke db
          var cat = {
            device: 'DEV01',
            temperature: object.temp,
            image: `/WLIR/Reminder/${object.dir}/${object.filename}`,
            date: object.date,
            time: object.time,
            type: 'suspect'
          };
          var query = db.query('INSERT INTO tb_face SET ?', cat, function(err,
            result) {
            console.log(result);
          });
        } catch (error) {
          console.log('Error: ', error.message);
        }
        console.log(object);  
        socket.emit('alert', object);
      }
    }
  });
  
  socket.on('disconnect', function(){
    watcher_info.close();
    watcher_reminder.close();
  });
});

app.listen(4000, () => {
    console.log('serving on port 4000');
});


