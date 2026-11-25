import nodemailer from "nodemailer"

export const sendMail = async (email, subject, OTP) => {
  const { EMAIL_USER, EMAIL_PASS } = process.env
  if (!EMAIL_USER || !EMAIL_PASS) {
    throw new Error("EMAIL_USER and EMAIL_PASS environment variables are required")
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: EMAIL_USER,
      pass: EMAIL_PASS,
    },
  })

  await transporter.sendMail({
    from: EMAIL_USER,
    to: email,
    subject: subject,
    html: OTP,
  })
}
