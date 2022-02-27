const express = require("express");
const cors = require("cors");

const users = require("./router/users.js");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/users", users);

const port = process.env.API_PORT || 5000;
app.listen(port, console.log("listening on port: " + port));

module.exports.app = app;
