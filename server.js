var express = require("express");

var api = require("./app/routing/apiRoutes");
var html = require("./app/routing/htmlRoutes");

var app = express();
const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api", api);
app.use("/", html);

app.listen(PORT, err => {
    if (err) {
        throw err;
    }

    console.log("Server listening on Port: " + PORT);
});