

const nodemailer = require('nodemailer');
const log = console.log;


let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'ayuh.official@gmail.com', // TODO: your gmail account
        pass: 'a910dea41d955b8ace1c92199ceb18c3e90f19b42cbcde2bfd3bac88e311a326',
    },
    tls: {
        rejectUnauthorized: false
    }

});


let mailOptions = {
    from: 'ayuh.official@gmail.com', // TODO: email sender
    to: 'prabalb046348@gmail.com', // TODO: email receiver
    subject: 'Nodemailer - Test',
    text: 'Wooohooo it works!!'
};


transporter.sendMail(mailOptions, (err, data) => {
    if (err) {
        return log('Error occurs');
    }
    return log('Email sent!!!');
});