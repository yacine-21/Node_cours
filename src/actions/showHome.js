function showHome(req, res, next){
    res.send(`
        <h1>Bienvenue sur ma superbe application</h1>
        <img src="https://d1.awsstatic.com/Projects/NodeJS_Web_App_HERO-ART_SM.11085a36afbc68874492ec5761d120cadcf2123e.png" alt="app"/> <br>
    `)
}

module.exports = showHome;