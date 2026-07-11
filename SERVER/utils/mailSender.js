const nodemailer = require("nodemailer");

const mailSender = async (email, title, body) => {
  try {
    console.log("STEP 1");
    console.log("MAIL_HOST:", process.env.MAIL_HOST);
    console.log("MAIL_USER:", process.env.MAIL_USER);
    console.log("MAIL_PASS:", process.env.MAIL_PASS ? "Present" : "Missing");

    console.log("STEP 2 - Creating Transporter");

    const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
});

    console.log("STEP 3 - Before Verify");

  await transporter.verify().catch((err) => {
  console.error("VERIFY ERROR");
  console.error(err);
  throw err;
});

    console.log("✅ STEP 4 - SMTP Connected");

    console.log("STEP 5 - Before Send Mail");

    const info = await transporter.sendMail({
      from: `"NexLearn" <${process.env.MAIL_USER}>`,
      to: email,
      subject: title,
      html: body,
    });

    console.log("✅ STEP 6 - Mail Sent");
    console.log(info);

    return info;
  } catch (error) {
    console.error("❌ MAIL ERROR:", error);
    throw error;
  }
};

module.exports = mailSender;