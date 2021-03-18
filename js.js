// déclaration de variables
require("dotenv").config();
const express = require("express");
const auth = require("./src/middlewares/auth");
const rateLimit = require("./src/middlewares/rateLimit");
const serialization = require("./src/middlewares/serialization");
const getTestAction = require("./src/actions/getTestAction");
const sumAction = require("./src/actions/sum");
const showAnime = require("./src/actions/showAnime");
const showHome = require("./src/actions/showHome");
const app = express();

// Route GET
app.get("/", showHome)
app.get("/test",auth,rateLimit, getTestAction,serialization);
app.get("/sum", rateLimit,sumAction,serialization);
app.get("/anime",showAnime);

const PORT = process.env.PORT || 1234;

app.listen(PORT, () => console.log("Server Started at http://" + process.env.URL + ":" + PORT))

