const nodemailer = require("nodemailer");

const mailSender = async (email, title, body) => {
    console.log("MAIL_HOST =", process.env.MAIL_HOST);
  try {
    console.log("MAIL_HOST =", process.env.MAIL_HOST);
console.log("MAIL_USER =", process.env.MAIL_USER);
    const transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      port: 587,
      secure: false,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    const info = await transporter.sendMail({
      from: `"NexLearn" <${process.env.MAIL_USER}>`,
      to: email,
      subject: title,
      html: body,
    });

    return info;
  } catch (error) {
    console.error("MAIL ERROR:", error);
    throw error;
  }
};

module.exports = mailSender;