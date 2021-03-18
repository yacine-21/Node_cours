// déclaration de variables
require("dotenv").config();
const path = require('path');
const express = require("express");
const auth = require("./src/middlewares/auth");
const rateLimit = require("./src/middlewares/rateLimit");
const serialization = require("./src/middlewares/serialization");
const getTestAction = require("./src/actions/getTestAction");
const sumAction = require("./src/actions/sum");
const showHome = require("./src/actions/showHome");
const showAnime = require("./src/actions/showAnime");
const showOP = require("./src/actions/showOP");
const showHxH = require("./src/actions/showHxH");
const showSNK = require("./src/actions/showSNK");
const showKNY = require("./src/actions/showKNY");
const app = express();
app.use(express.static(__dirname + '/public'));


// Route GET
app.get("/", showHome)
app.get("/test",auth,rateLimit, getTestAction,serialization);
app.get("/sum", rateLimit,sumAction,serialization);
app.get("/AllcharacterAnime",showAnime);
app.get("/AllcharacterAnime/OP",showOP);
app.get("/AllcharacterAnime/HxH",showHxH);
app.get("/AllcharacterAnime/SNK",showSNK);
app.get("/AllcharacterAnime/KNY",showKNY);

app.get('/html',function(req,res){
    res.sendFile(path.join(__dirname+'/index.html'));
  });

const PORT = process.env.PORT || 1234;

app.listen(PORT, () => console.log("Server Started at http://" + process.env.URL + ":" + PORT))

