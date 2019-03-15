const router = require('express').Router()
const controller_user = require('../controllers/user')
const controller_music = require('../controllers/music')

router
    .post('/register', controller_user.register)
    .post('/login', controller_user.login)
    // .get('/music', controller_music)
    .get('/search', controller_music.searchSong)
    .get('/songs/:id', controller_music.getSong)


module.exports = router