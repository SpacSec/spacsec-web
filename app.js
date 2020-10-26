const express = require("express");
const bodyParser = require("body-parser");

const app = express();

let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

app.use(bodyParser.urlencoded({ extended: false }));

//static assets
app.use(express.static(__dirname + "/Public"));

app.get("/", (req, res) => {
  res.render("index");
});

app.set("view engine", "ejs");
