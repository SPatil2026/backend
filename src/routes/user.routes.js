const Router = require('express')
const { registerUser, loginUser } = require('../controllers/user.contoller')
const { upload } = require('../middlewares/multer.middleware')
const { verfifyJWT } = require('../middlewares/auth.middleware')

const router = Router()

router.route('/register').post(
    upload.fields([
        {
            name: 'avatar',
            maxCount: 1
        },
        {
            name: 'coverImage',
            maxCount: 1
        }
    ]),
    registerUser
)

router.route('/login').post(loginUser)

// secured routes
router.route("/logout").post(verfifyJWT, logoutUser)

module.exports = router