const nodemailer = require("nodemailer");
export default function (req, res) {
  console.log(req.body);  
  res.redirect("/form-submitted");
}