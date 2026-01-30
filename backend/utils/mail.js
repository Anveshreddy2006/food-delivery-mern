import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

console.log("ENV CHECK EMAIL:", process.env.EMAIL);
console.log(
  "ENV CHECK EMAIL_PASSWORD:",
  process.env.EMAIL_PASSWORD,
  typeof process.env.EMAIL_PASSWORD,
);

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAIL_PASSWORD,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

export const sendOtpMail = async (to, otp) => {
  await transporter.sendMail({
    from: process.env.EMAIL,
    to,
    subject: "Reset Your Password",
    text: `Your OTP is ${otp}. It expires in 5 minutes.`,
  });
};
