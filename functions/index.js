const functions = require('firebase-functions');
const admin = require('firebase-admin');
const nodemailer = require('nodemailer');
const cors = require('cors');
admin.initializeApp();

let transporter = nodemailer.createTransport({
  // host: 'smtp.gmail.com',
  // port: 465,
  // secure: true,
  service: 'Gmail',
  auth: {
    user: 'arnoldcliff98@gmail.com',
    pass: 'c3l12i9f6f6'
  }
});

exports.sendContactMessage = functions.firestore.document('messages/{messagesId}').onCreate((snap, context) => {
  const snapshot = snap.data();
  const val = snapshot;
  async function main() {
    let info = await transporter.sendMail({
      from: val.email,
      to: 'arnoldcliff99@gmail.com',
      subject: `Information request from ${val.name}`,
      html: val.html
    });

    let info2 = await transporter.sendMail({
      from:  'arnoldcliff99@gmail.com',
      to: val.email,
      subject: `Your message has been received ${val.name}`,
      html: val.html2
    });

    console.log('----------------------------');
    console.log('Message sent', info.messageId, info2.messageId);
    return 0;
  }
  main().catch(console.error);
  return 0;
})
