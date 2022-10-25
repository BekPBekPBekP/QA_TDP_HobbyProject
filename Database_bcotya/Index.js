const express = require("express");

const app = express();

const bodyParser = require("body-parser")

const catRoutes = require("../Database_bcotya/Routes/CatRoutes");

app.use(bodyParser.json())

app.use("/bcotya", catRoutes);

const server = app.listen(3011, () => console.log("Started on", server.address().port));