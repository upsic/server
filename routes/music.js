const router = require('express').Router()
const isLogin = require('../middlewares/isLogin')
const isOwner = require('../middlewares/isOwner')
const image = require('../helpers/images')
const MusicController = require('../controllers/musicController')

router.get('/', MusicController.all)
// router.use(isLogin)
router.post('/', image.multer.single('music'), image.sendUploadToGCS, MusicController.create)

// router.use(isOwner)
router.delete('/:id',  MusicController.delete)

module.exports = router