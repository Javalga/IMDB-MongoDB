const { Router } = require("express")
const router = Router()
const moviesCtrl = require('../controller/movies_controller')

router.get('/photos', moviesCtrl.getPhotos)
router.post('/photos', moviesCtrl.postPhoto)
router.put('/photos', moviesCtrl.putPhoto)
router.delete('/photos', moviesCtrl.delPhoto)

module.exports = router;