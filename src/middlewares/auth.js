
function auth (req, res, next){
    if(req.query.token && req.query.mdp){
        return next();
    }

    return res.status(403).send("acces denied")
}


module.exports = auth;