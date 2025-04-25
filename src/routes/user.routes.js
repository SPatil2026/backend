const Router = require('express')
const { registerUser, loginUser, refreshAccessToken } = require('../controllers/user.contoller')
const { upload } = require('../middlewares/multer.middleware')
const { verifyJWT } = require('../middlewares/auth.middleware')
const { logoutUser } = require('../controllers/user.contoller')

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
router.route("/logout").post(verifyJWT, logoutUser)
router.route("/refresh-token").post(refreshAccessToken)

module.exports = router