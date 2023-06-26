import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

export const validateEmail = async (req, res) => {
  try {
    const { email } = req.body;
    const { EMAIL_SERVICE_PROVIDER, EMAIL_PASSWORD, SENDER_EMAIL } =
      process.env;

    // Set up the email transport
    const transporter = nodemailer.createTransport({
      service: EMAIL_SERVICE_PROVIDER,
      port: 465,
      secure: true,
      debug: true,
      auth: {
        user: SENDER_EMAIL,
        pass: EMAIL_PASSWORD,
      },
    });

    // Define the email options
    const mailOptions = {
      from: SENDER_EMAIL,
      to: email,
      subject: "OTP for Login",
      html: `<p>Your OTP: 237672</p>`,
    };

    console.log(EMAIL_SERVICE_PROVIDER,SENDER_EMAIL,EMAIL_PASSWORD, mailOptions);

    // Send the email
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent:", info.response);
    return res.status(200).json({ message: "Email sent successfully" });
  } catch (err) {
    return res.status(404).json({ message: err });
  }
};
