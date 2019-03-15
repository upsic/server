const router = require('express').Router()
// const isLogin = require('../middlewares/isLogin')
// const isOwner = require('../middlewares/isOwner')
const image = require('../helpers/images')
const MusicController = require('../controllers/music')
const Auth = require('../middlewares/authentication')

router.get('/', Auth, MusicController.all)
// router.use(isLogin)
router.post('/', Auth, image.multer.single('music'), image.sendUploadToGCS, MusicController.create)

// router.use(isOwner)
router.delete('/:id', MusicController.delete)

module.exports = router