ip = require("../services/ip")

function getTestAction(req, res, next){
    ip(req.ip);
    // console.log(req)
    const query = req.query.phrase;
    res.rawResponse = query;
    return next();
}

module.exports = getTestAction;