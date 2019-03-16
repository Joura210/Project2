var express = require("express");
var app = express();
var path = require("path");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var router = express.Router();

var db = require("../models");

router.get("/", (req,res) => {
  res.sendFile(path.join(__dirname, "../public/landing.html"))
})

router.get("/userlogin", (req,res) => {
  db.parent.findAll({
    where: {
        username: req.body.username 
    }
  }).then(result => {
    // result will have all of the user info
    // we can check if the password is correct
    // if correct, send to next page
  })
})

module.exports = router;