var db = require("./models")

function seedFile() {
    db.Parent.create({
        name: "Ben Askren",
        userName: "funkyb",
        password: "adad",
        pin: 1234
    }).then(result => {
        console.log("Ben Askren Added");
        db.Kid.create({
            name: "little ben",
            rewardName: "lego set",
            rewardValue: 25.00,
            ParentId: 1
        }).then(result => {
            console.log("Kid Added");
            db.Task.create({
                name: "clean room",
                value: 30,
                iterations: 7,
                progress: 0,
                complete: false,
                KidId: 1
            })
        })
    
        db.Kid.create({
            name: "middle ben",
            rewardName: "hamburger",
            rewardValue: 15.00,
            ParentId: 1
        }).then(result => {
            console.log("Kid Added");
        })
    
        db.Kid.create({
            name: "large ben",
            rewardName: "car",
            rewardValue: 2500.00,
            ParentId: 1
        }).then(result => {
            console.log("Kid Added");
        })
    })
    
    db.Parent.create({
        name: "Michael Bisping",
        userName: "thecount",
        password: "adad",
        pin: 1234
    }).then(result => {
        console.log("Michael Bisping Added");
        db.Kid.create({
            name: "asshole lucas",
            rewardName: "rockhold swag",
            rewardValue: 250.00,
            ParentId: 2
        }).then(result => {
            console.log("Kid Added");
        })
    })

    

    
}

module.exports = seedFile;