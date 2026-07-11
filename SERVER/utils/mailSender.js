const nodemailer = require("nodemailer");

const mailSender = async (email, title, body) => {
  try {
    console.log("STEP 1");

    const transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      port: 587,
      secure: false,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    console.log("STEP 2 - Transport Created");

    await transporter.verify();
    console.log("STEP 3 - SMTP Verified");

    const info = await transporter.sendMail({
      from: `"NexLearn" <${process.env.MAIL_USER}>`,
      to: email,
      subject: title,
      html: body,
    });

    console.log("STEP 4 - Mail Sent");
    console.log(info);

    return info;
  } catch (error) {
    console.error("MAIL ERROR:", error);
    throw error;
  }
};

module.exports = mailSender;