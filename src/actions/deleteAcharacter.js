const characterShema = require("../../models/character");


function deleteAcharacter(req, res){
    const id = req.params.id;

  characterShema.remove({_id: id})
  .exec()
  .then(result =>{res.status(202).send("character deleted.")})
  .catch(error => next(error));
}

module.exports = deleteAcharacter;