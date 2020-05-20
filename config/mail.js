var nodemailer = require('nodemailer');
var Handlebars = require('handlebars');
var fs = require('fs');
var path = require('path');
const dotenv = require('dotenv');

dotenv.config();

// Open template file
var source = fs.readFileSync(path.join(__dirname, 'email.hbs'), 'utf8');
// Create email generator
var template = Handlebars.compile(source);

// create reusable transport method (opens pool of SMTP connections)
var smtpTransport = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 587,
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD
    },
    tls: {rejectUnauthorized: false},
    debug:true
});

// setup e-mail data with unicode symbols
var mailOptions = {
    to: "akbar0102@student.upi.edu", // list of receivers
    subject: "Notifications", // Subject line
    html: template()
}

function alertEmail(){
    // send mail with defined transport object
    smtpTransport.sendMail(mailOptions, function(error, response){
        if(error){
            console.log(error);
        }else{
            console.log("Message sent: " + response.response);
        }

        // if you don't want to use this transport object anymore, uncomment following line
        smtpTransport.close(); // shut down the connection pool, no more messages
    });
}

module.exports.alert = alertEmail;