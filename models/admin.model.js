const sql = require('../config/db');

const Face = function(face){
    this.device = face.device;
    this.temperature = face.temperature;
    this.image = face.image;
    this.date = face.date;
    this.time = face.time;
    this.type = face.type;
}

Face.getAll = (date, result) => {
    sql.query(`SELECT id_face, device, temperature, image, time, type, 
    DATE_FORMAT(date,'%Y/%m/%d') as date FROM tb_face WHERE date = "${date}"`, (err, res)=>{
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
    
        console.log("face all: ", res);
        result(null, res);
    });
}

Face.getCountAll = (date, result) => {
    sql.query(`SELECT count(id_face) AS jumlah,
    sum(case when type = 'normal' then 1 else 0 end) AS normal,
    sum(case when type = 'suspect' then 1 else 0 end) AS suspect
    FROM tb_face WHERE date =" ${date}"`, (err, res)=>{
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
    
        console.log("face all: ", res);
        result(null, res);
    });
}

Face.getCountDaily = (date, result) => {
    sql.query(`SELECT day(date) AS tanggal, hour(time) AS jam, count(*) as jumlah FROM tb_face WHERE date = "${date}" GROUP BY hour(time), day(date) ORDER BY tanggal`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
    
        console.log("face all: ", res);
        result(null, res);
    });
}

module.exports = Face;