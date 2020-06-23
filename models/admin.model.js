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
    sql.query(`SELECT id_face, device, temperature, image, time, type, DATE_FORMAT(date,'%Y/%m/%d') as date FROM tb_face WHERE date = "${date}"`, (err, res)=>{
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
    sql.query(`SELECT COUNT(id_face) AS jumlah FROM tb_face WHERE date =" ${date}"`, (err, res)=>{
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
    
        console.log("face all: ", res);
        result(null, res);
    });
}

Face.getType = (date, type, result) => {
    sql.query(`SELECT COUNT(id_face) AS jumlah, type FROM tb_face WHERE date = "${date}" AND type = "${type}"`, (err, res)=>{
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
      
        console.log("face type: ", res);
        result(null, res);
    });
}

module.exports = Face;