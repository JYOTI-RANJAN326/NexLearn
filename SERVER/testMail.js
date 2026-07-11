require("dotenv").config();
const nodemailer = require("nodemailer");

async function test() {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    requireTLS: true,
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
  });

  try {
    await transporter.verify();
    console.log("SMTP Connected");

    const info = await transporter.sendMail({
      from: process.env.MAIL_USER,
      to: process.env.MAIL_USER,
      subject: "SMTP Test",
      text: "Hello from NexLearn",
    });

    console.log("Mail sent:", info.messageId);
  } catch (err) {
    console.error(err);
  }
}

test();