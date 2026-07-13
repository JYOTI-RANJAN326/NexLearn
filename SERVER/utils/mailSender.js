const axios = require("axios");

const mailSender = async (email, title, body) => {
  try {
    console.log("Sending email via Brevo API...");
    console.log("BREVO_API_KEY exists:", !!process.env.BREVO_API_KEY);
console.log(
  "BREVO_API_KEY prefix:",
  process.env.BREVO_API_KEY?.substring(0, 8)
);

    const response = await axios.post(
      "https://api.brevo.com/v3/smtp/email",
      {
        sender: {
          name: "NexLearn",
          email: "ashutoshbharadwaj27022006@gmail.com", // Must be a verified sender in Brevo
        },
        to: [
          {
            email: email,
          },
        ],
        subject: title,
        htmlContent: body,
      },
      {
        headers: {
          accept: "application/json",
          "api-key": process.env.BREVO_API_KEY,
          "content-type": "application/json",
        },
      }
    );

    console.log("BREVO SUCCESS:", response.data);
    return response.data;
  } catch (error) {
    console.error(
      "BREVO ERROR:",
      error.response?.status,
      error.response?.data || error.message
    );
    throw error;
  }
};

module.exports = mailSender;