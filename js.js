// déclaration de variables
const path = require('path');
require("dotenv").config();
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
const listOrgRepos = require("./src/actions/github/listOrgRepos");
const connectDB = require("./src/middlewares/connectDB")
const characterShema = require("./models/character")
const app = express();

connectDB();

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
app.get('/html', function(req,res){
  res.sendFile(path.join(__dirname+'/index.html'));
});

app.get("/orgs/:org/repos",listOrgRepos,serialization);

// POST
app.post("/characters", (req, res) =>{
  character = new characterShema({
    body: {
      name: "Monkey D Luffy",
      Power: "Gomu Gomu no mi",
      Background: "An elastic man who dream to become the king of pirates",
      prime: 150000000,
  }
  });

  character.save()
  .then(character =>{
    res.status(200).send(character)
  })
  .catch(err  =>{
    console.log(err)
    return res.send(err);
  })
}); 

const PORT = process.env.PORT || 1234;

app.listen(PORT, () => console.log("Server Started at http://" + process.env.URL + ":" + PORT))
