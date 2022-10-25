const express = require("express");

const app = express();

const bodyParser = require("body-parser")

const catRoutes = require("./Routes/CatRoutes");

app.use(bodyParser.json())

app.use("/bcotya", catRoutes);

app.use((err, req, res, next) => {
    res.status(500).send(err);
})

const server = app.listen(3011, () => console.log("Successfully started on port", server.address().port));