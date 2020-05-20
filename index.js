const bodyParser = require('body-parser');
const express = require('express');
const path = require('path');
const hbs = require('hbs');
const fs = require('fs');
const io = require('socket.io')(8090);
const web = require('./routes/web');
const watch = require('node-watch');
const chokidar = require('chokidar');
const mail = require("./config/mail");
const {Telegram} = require('telegraf');

const app = express();

let data;
let interval;
let warning;

//bot telegram
const tg = new Telegram(process.env.BOT_TOKEN);

hbs.registerPartials("./views/partials");
app.set('view-engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("./public"));
app.use('/', web);

//baca file
function getFileReadPromise(){
	return new Promise((resolve, reject)=>{
		fs.readFile('./data.json', function(err, data){
      if(err) reject(err);
      if(!isEmptyObject(data)){
        try {
          resolve(JSON.parse(data));
        } catch (error) {
          return false;
        }
      }
		})
	});
}

//read json face info
function getFileFace(faceinfo){
	return new Promise((resolve, reject)=>{
		fs.readFile(faceinfo, function(err, data){
      if(err) reject(new Error('Could not get the file'));
      if(!isEmptyObject(data)){
        resolve(JSON.parse(data));
      }
		})
	});
}

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

//namespace untuk chart object dari json file
const chart = io.of('/chart');
chart.on('connection', (socket) => {
	interval = setInterval(async function(){
		const object = await getFileReadPromise();
		if(Object.keys(object).includes('person')){
      if(Object.values(object)[Object.keys(object).indexOf('person')] > 10){
        //mail.alert();
        const txt = `Pemberitahuan. Terindikasi ada seseorang yang membawa senjata tajam berdasarkan pantauan CCTV di titik A. Terima kasih.`;
        // tg.sendMessage(process.env.GROUP_ID, txt);
        warning = 'danger';
      }else{
        warning = 'safe';
      }
    }

    data = {
      'size': Object.keys(object).length,
      'label': Object.keys(object),
      'value': Object.values(object),
    };

    console.log(object);
    socket.emit('vote', { object: data, alert: warning });
	}, 1000);

	socket.on('disconnect', function(){
    clearInterval(interval);
		console.log("disconnected!");
	});
});

//namespace untuk face
const face = io.of('/face');
face.on('connection', (socket) =>{
  let object = '';
  //watcher folder preview - root
  const watcher_info = watch('./public/WLIR/Preview', {recursive: true}, function(evt, name) {
    if (evt == 'update') {
      var stats = fs.statSync(name); //ada objek baru, ambil statusnya
      if(!stats.isDirectory()){ //kalau folder baru, tidak perlu di ambil data filename nya untuk d split
        console.log('root '+name.split("\\"));
        try {
          object = getSplitName(name); //split nama file, untuk diambil data-datanya
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

  });
  
  socket.on('disconnect', function(){
    watcher_info.close();
    watcher_reminder.close();
  });
});

app.listen(4000, () => {
    console.log('serving on port 4000');
});

function isEmptyObject(obj) {
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      return false;
    }
  }
  return true;
}


