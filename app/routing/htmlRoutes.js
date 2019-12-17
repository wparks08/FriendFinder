var express = require("express");
var router = express.Router();

router.get("/survey", (req, res) => {
    res.send("survey.html");
})

router.get("/*", (req, res) => {
    res.send("home.html")
})

module.exports = router;