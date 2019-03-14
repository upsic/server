const router = require('express').Router()
const controller_user = require('../controllers/user')
const controller_music = require('../controllers/music')

router
    .post('/register', controller_user.register)
    .post('/login', controller_user.login)
    // .get('/music', controller_music)

module.exports = router