const { contactUsEmail } = require("../mail/templates/contactFormRes");
const mailSender = require("../utils/mailSender");

// exports.contactUsController = async (req, res) => {
//   try {
//     const {
//       email,
//       firstname,
//       lastname,
//       message,
//       phoneNo,
//       countrycode,
//     } = req.body;

//     console.log("Contact Form Data:", req.body);

//     // 1. Send notification to Admin
//     await mailSender(
//       process.env.MAIL_USER,
//       `New Contact Form Submission from ${firstname} ${lastname}`,
//       `
//         <h2>New Contact Request</h2>

//         <p><strong>Name:</strong> ${firstname} ${lastname}</p>
//         <p><strong>Email:</strong> ${email}</p>
//         <p><strong>Phone:</strong> ${countrycode} ${phoneNo}</p>
//         <p><strong>Message:</strong></p>
//         <p>${message}</p>
//       `
//     );

//     // 2. Send confirmation email to user
//     await mailSender(
//       email,
//       "Thanks for contacting NexLearn",
//       contactUsEmail(
//         email,
//         firstname,
//         lastname,
//         message,
//         phoneNo,
//         countrycode
//       )
//     );

//     return res.status(200).json({
//       success: true,
//       message: "Message sent successfully",
//     });

//   } catch (error) {
//     console.error("CONTACT ERROR:", error);

//     return res.status(500).json({
//       success: false,
//       message: error.message,
//     });
//   }
// };
exports.contactUsController = async (req, res) => {
  try {
    console.log("STEP 1");

    const {
      email,
      firstname,
      lastname,
      message,
      phoneNo,
      countrycode,
    } = req.body;

    console.log("STEP 2");

    await mailSender(
      process.env.MAIL_USER,
      `New Contact from ${firstname}`,
      `
        <h2>New Contact Request</h2>
        <p>Name: ${firstname} ${lastname}</p>
        <p>Email: ${email}</p>
        <p>Phone: ${countrycode} ${phoneNo}</p>
        <p>Message: ${message}</p>
      `
    );

    console.log("STEP 3");

    await mailSender(
      email,
      "Thanks for contacting NexLearn",
      contactUsEmail(
        email,
        firstname,
        lastname,
        message,
        phoneNo,
        countrycode
      )
    );

    console.log("STEP 4");

    return res.status(200).json({
      success: true,
      message: "Message sent successfully",
    });

  } catch (error) {
    console.error("CONTACT ERROR:", error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};