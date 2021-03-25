const axios = require("axios");

const githubToken = process.env.githubToken
function getSingleRepo(req,res,next){

    let options = {
        method: 'GET',
        url: `${process.env.github_api_url}/${req.query.owner}/${req.query.name}`,
        headers: {Authorization: `token ${githubToken}`}
    };

    axios.request(options).then(function (response) {
        res.rawResponse = response.data;
        return next();
    }).catch(function (error) { 
        res.rawResponse = error.message;
        console.error(error);
        return next();
    });
}

module.exports = getSingleRepo;