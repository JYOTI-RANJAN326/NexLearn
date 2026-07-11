require("dotenv").config();
const nodemailer = require("nodemailer");

async function test() {
  console.log("MAIL_HOST:", process.env.MAIL_HOST);
  console.log("MAIL_USER:", process.env.MAIL_USER);

  const transporter = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: 587,
    secure: false,
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
  });

  try {
    await transporter.verify();
    console.log("✅ SMTP Connected");

    const info = await transporter.sendMail({
      from: `"NexLearn" <${process.env.MAIL_USER}>`,
      to: process.env.MAIL_USER,
      subject: "SMTP Test",
      text: "Hello from NexLearn using Brevo!",
    });

    console.log("✅ Mail sent:", info.messageId);
  } catch (err) {
    console.error("❌ SMTP Error:", err);
  }
}

test();