ip = require("../services/ip")

function getTestAction(req, res, next){
    ip(req.ip);
    const query = req.query.phrase;
    res.rawResponse = query;
    console.log(res)
    return next();
}

module.exports = getTestAction;