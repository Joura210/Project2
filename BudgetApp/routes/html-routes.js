var path = require("path");

var isAuthenticated = require("../config/middleware/isAuthenticaed");

module.exports = function (app) {
    app.get("/", (req, res) => {
        if (req.parent) {
            res.render("index");
        };
        res.render("login");
    })

    app.get("/signup", (req, res) => {
        if (req.parent) {
            res.render("index");
        };
        res.render("signup");
    })

    app.get("/members", isAuthenticated, function (req, res) {
        res.render("index");
    });
}