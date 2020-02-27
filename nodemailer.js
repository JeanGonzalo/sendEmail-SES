
const nodemailer = require('nodemailer');

require('dotenv').config();
let mailTransporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'rjeangonzalo@gmail.com',
        pass: process.env.pass
    }
});

let mailDetails = {
    from: 'rjeangonzalo@gmail.com',
    to: 'rjeangonzalo@hotmail.com, daniechoque159@gmail.com',
    subject: 'Test mail',
    text: 'Node.js testing mail for GeeksforGeeks'
};

mailTransporter.sendMail(mailDetails, function (err, data) {
    if (err) {
        console.log('Error Occurs');
    } else {
        console.log('Email sent successfully');
    }
}); 
