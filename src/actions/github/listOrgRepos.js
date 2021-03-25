const axios = require("axios");

const githubToken = process.env.githubToken
function listOrgRepos(req,res,next){

    let options = {
        method: 'GET',
        url: `https://api.github.com/orgs/${req.query.org}/repos`,
        headers: {Authorization: `token ${githubToken}`}
    };

    axios.request(options).then(function (response) {
        res.rawResponse = response.data;
        return next();
    }).catch(function (error) { 
        res.rawResponse = error.message;
        console.error(error);
        console.log(req.query.org)
        return next();
    });
}

module.exports = listOrgRepos;