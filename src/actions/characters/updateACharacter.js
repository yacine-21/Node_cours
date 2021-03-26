const characterShema = require("../../../models/character");
function updateAcharacter(req, res){
    const id = req.params.id;

    characterShema.updateOne({_id: id},{$set : {body: {
        nom: req.body.nom,
        power: req.body.power,
        background: req.body.background,
        prime: req.body.prime
    }}})
    .then(character => res.status(200).send("character well updated"))
      .catch(err  => res.send(err))
      console.log(req.body)
    }

module.exports = updateAcharacter;