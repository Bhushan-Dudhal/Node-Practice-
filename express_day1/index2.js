var express = require("express");
var app = express();

app.get("/", function (req, res) {
  res.render("home.ejs");
});

app.get("/about", function (req, res) {
  res.render(" about.ejs");
});

app.listen(500);

//listen(500); => function
//length => property
//innerHTML  => property
// val() => function
//HTML css  => output
//Template => page => .ejs => Embed javascript
//npm i ejs
//file Extention => .html => .ejs
