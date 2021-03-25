// déclaration de variables
const path = require('path');

if(process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

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
const getSingleRepo = require("./src/actions/github/getSingleRepo");
const updateArepoGithub = require("./src/actions/github/updateArepoGithub")
const connectDB = require("./src/middlewares/connectDB");
const characterShema = require("./models/character");
const app = express();
const bodyParser = require('body-parser');

connectDB();

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json())

// Route GET
app.get("/", showHome);
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
app.get("/repos/owner/name",getSingleRepo,serialization);


// REQUETE PATCH 
app.patch("/repos/:owner/repo", updateArepoGithub, serialization);


// REQUETE POST

app.post("/api/characters", (req, res) =>{
  character = new characterShema({
    body: {
      nom: req.body.nom,
      power: req.body.power,
      background: req.body.background,
      prime: req.body.prime
  }
  });

  character.save()
  .then(character => res.status(200).send(character))
  .catch(err  => res.send(err))
  
  req.query.model = character.body;
  characterName = req.query.model.name;
}); 

const PORT = process.env.PORT || 1234;

app.listen(PORT, () => console.log("Server Started at http://" + process.env.URL + ":" + PORT))
