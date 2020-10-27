const express = require("express");
const bodyParser = require("body-parser");
const routes = require('./routes/routes');
const app = express();

let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}

app.use(bodyParser.urlencoded({ extended: false }));

//static assets
app.use(express.static(__dirname + "/public"));

// Set the view engine to ejs
app.set("view engine", "ejs");

//The router gets imported and used as middleware.
app.use('/', routes);



app.listen(port, () => console.log(`Example app listening on port ${port}!`));