const { sum } = require('../utils');

function sumAction(req, res, next){
    const{ a, b} = req.query;
    const nb = sum(parseInt(a,10), parseInt(b,10))
    res.rawResponse = nb;
    console.log(req.query)

    return next();
}


module.exports = sumAction;