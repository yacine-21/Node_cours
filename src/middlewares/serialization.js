const { toUpperCase } = require("../utils")

function serialization(req, res){
    console.log("response ok")
    return res.send(res.rawResponse);
}

module.exports = serialization;