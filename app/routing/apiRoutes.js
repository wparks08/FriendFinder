var express = require("express");
var router = express.Router();

var friends = require("../data/friends");

router.get("/friends", (req, res) => {
    res.json(friends);
});

router.post("/friends", (req, res) => {
    friends.push({
        name: req.body.name,
        photo: req.body.photo,
        scores: req.body.scores
    });
    res.json(friends);
});

module.exports = router;