function showAnime(req, res, next){
    res.send(`<ul>
        <li>Luffy</li>
        <li>Zoro</li>
        <li>Sanji</li>
        <li>Nami</li>
        <li>Robin</li>
        <li>Franky</li>
        <li>Brook</li>
        <li>Jinbei</li>
    </ul>`)
}

module.exports = showAnime;