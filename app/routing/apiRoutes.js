var express = require("express");
var router = express.Router();

router.get("/friends", (req, res) => {
    res.send("DEBUG");
});

router.post("/friends", (req, res) => {
    res.send("DEBUG");
})

module.exports = router;