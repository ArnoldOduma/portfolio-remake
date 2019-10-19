const functions = require('firebase-functions');
const admin = require('firebase-admin');
const nodemailer = require('nodemailer');
const cors = require('cors');
admin.initializeApp();

let transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  service: 'gmail',
  auth: {
    user: 'arnoldcliff99@gmail.com',
    pass: 'c3l12i9f6f6'
  }
});

exports.sendContactMessage = functions.firestore.document('messages/{messagesId}').onCreate((snap, context) => {

    const snapshot = snap.data();
    console.log("----------------------");
    console.log("user created: " + snapshot.name);

    const val = snapshot;

    const mailOptions = {
      from: val.email,
      to: 'arnoldcliff98@gmail.com',
      subject: `Information request from ${val.name}`,
      html: val.html
    };
    return transporter.sendMail(mailOptions, (err, res) => {
      if (err) {
        // return res.send(err.toString());
        console.log(error);
      } else {
        console.log("Message sent: " + res.message);
      }
      // return res.send('Email Sent successfully');
      return 0;
    })
  return 0;
})
