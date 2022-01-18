const express = require('express')
const router = express.Router()

const {googlelogin, jwtverify} = require('../controllers/auth')

router.route('/googlelogin').post(googlelogin);
router.route('/jwtverify').post(jwtverify);

module.exports = router
