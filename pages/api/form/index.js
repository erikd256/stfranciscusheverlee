let nodemailer = require("nodemailer");
export default function (req, res) {
  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: process.env.senderemail,
      pass: process.env.password,
    },
    secure: true,
  })
  res.redirect("/form-submitted");
}