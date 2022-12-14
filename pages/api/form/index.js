let nodemailer = require("nodemailer");
export default function (req, res) {
  var host = req.hostname;
  if(host=="www.stfranciscus-heverlee.org"){
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
  else{
    res.status(401).redirect('/')
  }
}