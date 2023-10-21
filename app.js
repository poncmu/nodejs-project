const express = require("express");
const chalk = require("chalk");
const debug = require("debug")("app");
const morgan = require("morgan");
const path = require("path");
const products = require("./data/products.json");
const productRouter = express.Router();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(morgan("combined"));
app.use(express.static(path.join(__dirname, "/public/")));

app.set("views", "./src/views");
app.set("view engine", ejs);

productRouter.route("/").get((req, res) => {
    res.render("products", {
        products,
    });
});

app.use("/products", productRouter);

app.get("/", (req, res) => {
    res.render("index", {
        username: "PondPond",
        customers: ["One", "Two", "Three"],
    });
});

app.listen(PORT, () => {
    debug("Listen on port " + chalk.red(" : " + PORT));
});