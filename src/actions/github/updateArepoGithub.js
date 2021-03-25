const axios = require("axios");

const githubToken = process.env.githubToken;

function updateArepo(req, res, next) {
  let options = {
    method: "PATCH",
    url: `${process.env.github_api_url}/repos/${req.params.owner}/${req.params.repo}`,
    headers: {
      Authorization: `token ${githubToken}`,
      "Content-Type": "application/json",
    },
    data: {
      description: req.body.description,
    },
  };

  axios
    .request(options)
    .then(function (response) {
      res.rawResponse = response.data
      return next();
    })
    .catch(function (error) {
      res.rawResponse = error
      return next();
    });
}
module.exports = updateArepo;
