const axios = require("axios");

const mailSender = async (email, title, body) => {
  try {
    const response = await axios.post(
      "https://api.brevo.com/v3/smtp/email",
      {
        sender: {
          name: "NexLearn",
          email: "ashutoshbharadwaj27022006@gmail.com",
        },
        to: [
          {
            email,
          },
        ],
        subject: title,
        htmlContent: body,
      },
      {
        headers: {
          "api-key": process.env.MAIL_PASS,
          "Content-Type": "application/json",
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error(
      "BREVO API ERROR:",
      error.response?.data || error.message
    );
    throw error;
  }
};

module.exports = mailSender;