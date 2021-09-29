require('dotenv').config();
const nodemailer = require('nodemailer');

const sendRestMail = (req, res, next)=>{
    const transporter = nodemailer.createTransport({
        service:'gmail',
        secure: false,
        auth:{
            user: process.env.EMAIL,
            pass: process.env.PASSWORD
        },
        tls:{
           rejectUnauthorized: false,
         }
    });
    console.log(req.body)
    var message = "<br>Message:"+req.body.message;// a définir
    const mailOptions ={
        from: process.env.EMAIL,
        to: req.body.email,
        subject: 'mise a jour de votre password',
        html: message,
    }

    transporter.sendMail(mailOptions, function(error, response){
        if (error) { 
           // cb(error, null);
            console.log(error);
            res.status(400);
            res.json("error");
            next();
      } else {
            //cb(null, infos);
            console.log("ok")
            res.json("sended");
            next();
      }
    })
}

module.exports = sendRestMail;