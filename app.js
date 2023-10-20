const express = require("express");
const chalk = require("chalk");
const debug = require("debug")("app");
const morgan = require("morgan");

const app = express();
const port = 3000;

app.use(morgan("combined"));

app.get("/", (req, res) => {
    res.render("index", {
        username: "PondPond",
        customers: ["One", "Two", "Three"],
    });
});

app.listen(port, () => {
    debug("Listen on port " + chalk.green(port));
});