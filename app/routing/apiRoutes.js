var express = require("express");
var router = express.Router();

var friends = require("../data/friends");
var questions = require("../data/questions");

router.get("/friends", (req, res) => {
    res.json(friends);
});

router.get("/questions", (req, res) => {
    res.json(questions);
})

router.post("/friends", (req, res) => {
    let newFriend = {
        name: req.body.name,
        photo: req.body.photo,
        scores: req.body.scores
    }

    let match = findMatch(newFriend, friends);
    friends.push(newFriend);

    res.json(match);
});

function findMatch(newFriend, friends) {
    let closestScore;
    let match;
    //Below not working yet...
    friends.forEach(friend => {
        let totalScore = newFriend.scores.map((value, index, array) => { Math.abs(parseInt(value) - parseInt(friend.scores[index])) }).reduce((a, b) => a + b);
        

        if ((closestScore == null) || (totalScore < closestScore)) {
            closestScore = totalScore;
            match = friend;
        }
        
    });
    
    return match;
}

module.exports = router;