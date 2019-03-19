var db = require("../models");
var passport = require("../config/passport");
var seedFile = require("../seeds")

module.exports = function (app) {
    // Using the passport.authenticate middleware with our local strategy.
    // If the user has valid login credentials, send them to the members page.
    // Otherwise the user will be sent an error
    app.post("/api/login", passport.authenticate("local"), function (req, res) {
        // Since we're doing a POST with javascript, we can't actually redirect that post into a GET request
        // So we're sending the user back the route to the members page because the redirect will happen on the front end
        // They won't get this or even be able to access this page if they aren't authed
        res.json("/members");
    });

    // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
    // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
    // otherwise send back an error
    app.post("/api/signup", function (req, res) {
        console.log(req.body);
        db.Parent.create({
            name: req.body.name,
            userName: req.body.userName,
            password: req.body.password,
            pin: req.body.pin
        }).then(function () {
            res.redirect(307, "/api/login");
        }).catch(function (err) {
            console.log(err);
            res.json(err);
            // res.status(422).json(err.errors[0].message);
        });
    });

    app.get("/seedme", (req,res) => {
        seedFile();
        res.json({seeded: true});
    })

    app.post("/api/kid", (req, res) => {
        db.Kid.create({
            name: req.body.name,
            rewardName: req.body.rewardName || null,
            rewardValue: req.body.rewardValue || null,
            ParentId: req.body.parentId
        }).then(function (result) {
            res.json(result)
        })
    });

    app.post("/api/task", (req, res) => {
        db.Task.create({
            name: req.body.name,
            value: req.body.value,
            iterations: req.body.iterations,
            progress: req.body.progress || null,
            complete: req.body.compete || null,
            KidId: req.body.KidId
        }).then(function (result) {
            res.json(result)
        })
    })

    // Route for logging user out
    app.get("/logout", function (req, res) {
        req.logout();
        res.redirect("/");
    });

    app.get("/api/user_data", function (req, res) {
        if (!req.user) {
            // The user is not logged in, send back an empty object
            res.json({ login: false });
        }
        else {
            db.Kid.findAll({
                where: {
                    ParentId: req.user.id
                }
            }).then(kids => {
                var kidData = kids;
                res.json({
                    // userName: req.parent.userName,
                    // id: req.parent.id
                    login: true,
                    name: req.user.name,
                    userName: req.user.userName,
                    pin: req.user.pin,
                    kidData: kidData
                });
            })

        }
    });
};