const axios = require("axios");

const githubToken = process.env.githubToken
function listOrgRepos(req,res,next){
    let options = {
        method: 'GET',
        url: `${process.env.github_api_url}/orgs/${req.params.org}/repos`,
        headers: {Authorization: `token ${githubToken}`}
    };
    axios.request(options)
    .then(function (response) {
        res.rawResponse = response.data;
        return next();
    })
    .catch(function (error) { 
        res.rawResponse = error.message;
        return next();
    });
}

module.exports = listOrgRepos;