const { toUpperCase } = require("../utils")

function serialization(req, res){
    console.log("response ok");
    console.log(res);
    resultat = res.rawResponse;
    console.log(resultat)
    // return res.status(200).send("hey the result of " +  res.a  + " + " + res.b + " = "  + res.rawResponse);
    return res.status(200).send("" + resultat);
}

module.exports = serialization;