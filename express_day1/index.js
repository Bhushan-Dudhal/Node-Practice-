var express = require("express");
var app = express();


app.get("/", function (req, res) {
    res.send("hellohii ");

    
});

app.get("/about", function (req, res) {
    res.send("welcome to about page");
});

app.listen(1000);

//npm i express
//global variable => Function chya aat made asel tar local function chya baher asel tar globel 
//local variable =>
