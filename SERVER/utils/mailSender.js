const nodemailer = require("nodemailer")

const mailSender = async (email, title, body) => {
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      port: 465,
      secure: true,

      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    })

    const info = await transporter.sendMail({
      from: `"NEX Learn" <${process.env.MAIL_USER}>`,
      to: email,
      subject: title,
      html: body,
    })

    console.log("Email sent successfully:", info.messageId)
    return info
  } catch (error) {
    console.error("MAIL ERROR:", error)

    // Important: let the OTP controller know sending failed
    throw error
  }
}

module.exports = mailSender