const mysql = require('mysql');

const db = mysql.createConnection({
    connectionLimit : 100,
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'db_viana_thermal'
});

// connect to database
db.connect(function(err){
    if (err) {
        return console.error('error: ' + err.message);
    }
    console.log('Connected to the MySQL server.');
})

module.exports = db;