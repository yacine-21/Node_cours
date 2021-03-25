const characterShema = require("../../../models/character");

function createAcharacter(req, res){
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
}

module.exports = createAcharacter