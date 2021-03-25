const { toUpperCase } = require("../utils")

function serialization(req, res){
    return res.status(200).json(res.rawResponse);
}

module.exports = serialization;