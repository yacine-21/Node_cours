// VARIABLES DECLARATIONS

// DOTENV
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

// EXPRESS // BODY PARSER
const express             = require("express");
const app                 = express();
const bodyParser          = require("body-parser");
app.use(bodyParser.json());

// MIDDLEWARES
const auth                = require("./src/middlewares/auth");
const rateLimit           = require("./src/middlewares/rateLimit");
const serialization       = require("./src/middlewares/serialization");

// ACTIONS

const getTestAction       = require("./src/actions/getTestAction");
const sumAction           = require("./src/actions/sum");
const showHome            = require("./src/actions/showHome");
const showAnime           = require("./src/actions/showAnime");
const showOP              = require("./src/actions/showOP");
const showHxH             = require("./src/actions/showHxH");
const showSNK             = require("./src/actions/showSNK");
const showKNY             = require("./src/actions/showKNY");
const showHP              = require("./src/actions/showHP");
const listOrgRepos        = require("./src/actions/github/listOrgRepos");
const getSingleRepo       = require("./src/actions/github/getSingleRepo");
const updateArepoGithub   = require("./src/actions/github/updateArepoGithub");
const getAcharacter       = require("./src/actions/getAcharacter");
const deleteAcharacter    = require("./src/actions/deleteAcharacter");
const createAcharacter    = require("./src/actions/createAcharacter");
const updateAcharacter    = require("./src/actions/updateAcharacter");

// MONGO DB
const connectDB           = require("./src/middlewares/connectDB");
const characterShema      = require("./models/character");
connectDB();

// ROUTE GET

app.get("/", showHome);
app.get("/test", auth, rateLimit, getTestAction, serialization);
app.get("/sum", rateLimit, sumAction, serialization);
app.get("/AllcharacterAnime", showAnime);
app.get("/AllcharacterAnime/OP", showOP);
app.get("/AllcharacterAnime/HxH", showHxH);
app.get("/AllcharacterAnime/SNK", showSNK);
app.get("/AllcharacterAnime/KNY", showKNY);
app.get("/html", showHP);
app.get("/orgs/:org/repos", listOrgRepos, serialization);
app.get("/repos/owner/name", getSingleRepo, serialization);

// REQUETE PATCH -- UPDATE A REPO GITHUB
app.patch("/repos/:owner/:repo", updateArepoGithub, serialization);

// ----------------------------------- //

// ACTIONS WITH MONGO DB

// REQUETE GET -- GET A CHARACTER
app.get("/api/character/:characterID", getAcharacter);

// REQUETE POST -- CREATE A CHARACTER
app.post("/api/characters", createAcharacter);

// REQUETE DELETE -- DELETE A CHARACTER
app.delete("/api/character/:id", deleteAcharacter);

// PATCH DELETE -- UPDATE A CHARACTER
app.patch("/api/character/:id", updateAcharacter);

const PORT = process.env.PORT || 1234;
app.listen(PORT, () =>
  console.log("Server Started at http://" + process.env.URL + ":" + PORT)
);
