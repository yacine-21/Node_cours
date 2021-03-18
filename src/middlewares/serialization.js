const { toUpperCase } = require("../utils")

function serialization(req, res){
    console.log(req.ip);
    return res.send(toUpperCase(res.rawResponse));
}

module.exports = serialization;