const characterShema = require("../../../models/character");

function getAcharacter(req, res){
    const id = req.params.characterID;

  characterShema.find()
  .populate("characters")
  .then(character => {
    if(character === null){
      res.status(200).send("There is no characters, he has been delete")
    } else {
      console.log(character)
      res.status(200).send(character)
      }
})
.catch(error => next(character));
}

module.exports = getAcharacter;