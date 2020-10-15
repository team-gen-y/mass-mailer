require("dotenv/config");
const nodemailer = require("nodemailer");
const express = require("express");
const app = express();

app.post("/send_mail", (req, res) => {
  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.email, // here use your real email
      pass: process.env.password, // put your password correctly (not in this question please)
    },
  });

  const from = process.env.email;
  const to = req.body.to;
  const subject = req.body.subject;
  const matter = req.body.matter;

  let mailOptions = {
    from: from,
    to: to,
    subject: subject,
    text: matter,
  };

  transporter.sendMail(mailOptions, function (err, data) {
    if (err) {
      res.send(err);
    } else {
      res.send("mail sent");
    }
  });
});
module.exports = app;
