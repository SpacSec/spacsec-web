const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./routes/routes");
const app = express();
const mongoose = require("mongoose");
const md5 = require("md5");
const nodemailer = require("nodemailer");
const output = require("./public/email/email");
app.use(bodyParser.urlencoded({ extended: false }));
let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}

//Database connection
mongoose.connect(
  "mongodb+srv://admin:admin@cluster0.g3jsw.mongodb.net/formResponses?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true }
);

var db = mongoose.connection;
var messageSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
});
var userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const Message = mongoose.model("Message", messageSchema);
app.post("/", (req, res) => {
  const name = req.body.iname;
  const email = req.body.iemail;
  const message = req.body.imessage;

  console.log(name, email, message);

  const mess = new Message({
    name: name,
    email: email,
    message: message,
  });

  mess.save();
  const page_name = "home";
  const success = "true";

  async function sendEmail() {
    // const output = `
    // <h2>Thank you ${name} for getting in touch!</h2>
    // <hr/>
    // <p>We appreciate you contacting us. We will get back in touch with you soon!</p>
    // <p>Cheers!</p>
    // <p>Spacsec'21 Team</p>
    // `;
    const outputForBackend = `
    <h2>Contact form filled</h2>
    <h4>We received message on spacsec.com: </h4>
    <hr/>
    <p>Name: ${name}</p>
    <p>Email: <a href="mailto:${email}">${email}</a></p>
    <p>Message:</p>
    <p>${message}</p>
    <hr/>
    <p>
    Visit <a href="https://spacsec.com/login/">here</a> to view all the form responses.
    </p>
    `;
    let transporter = nodemailer.createTransport({
      name: "spacsec.com",
      host: "mail.spacsec.com",
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: "noreply@spacsec.com", // generated ethereal user
        pass: "*C!RNJSak2lF", // generated ethereal password
      },
      tls: {
        rejectUnauthorized: false,
      },
    });
    console.log("made the mail");
    let info = await transporter.sendMail({
      from: '"SpacSec Team" <noreply@spacsec.com>', // sender address
      to: email,
      subject: "Thanks for contacting us!", // Subject line
      html: output(name), // html body
    });
    let infoBackendMail = await transporter.sendMail({
      from: '"Website Response" <noreply@spacsec.com>', // sender address
      to: "manavendra4288@gmail.com",
      subject: "Contact Form Submitted", // Subject line
      html: outputForBackend, // html body
    });

    console.log("Message sent: %s", info.messageId);
    console.log("Message sent: %s", infoBackendMail.messageId);
    // console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  }
  sendEmail().catch(console.error);
  res.render("index", { page_name: page_name, success: success });
});

const User = mongoose.model("User", userSchema);
app.post("/login", (req, res) => {
  const username = req.body.iusername;
  const password = md5(req.body.ipassword);
  let page_name = "login";
  User.findOne({ username: username }, (err, foundUser) => {
    if (err) {
      console.log("nope");
    } else {
      if (foundUser) {
        console.log("user found");
        if (foundUser.password === password) {
          console.log("correct password");
          page_name = "loggedin";

          //retrieving data

          db.collection("messages")
            .find()
            .toArray((err, results) => {
              if (err) {
                console.log(err);
                res.render("auth/login", { page_name: page_name });
              } else {
                let responses = results;
                res.render("auth/showFormResponses", {
                  page_name: page_name,
                  responses: responses,
                });
              }
            });
        } else {
          res.render("auth/login", { page_name: page_name });
          console.log("wrong password");
        }
      } else {
        console.log("user not found");
        res.render("auth/login", { page_name: page_name });
      }
    }
  });
});

//show responses

//static assets
app.use(express.static(__dirname + "/public"));
app.use("/css", express.static(__dirname + "public/css"));
app.use("/js", express.static(__dirname + "public/js"));
app.use("/images", express.static(__dirname + "public/css"));

// Set the view engine to ejs
app.set("view engine", "ejs");

//The router gets imported and used as middleware.
app.use("/", routes);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
