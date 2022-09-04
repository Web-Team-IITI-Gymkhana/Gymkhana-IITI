import express from 'express'
const router = express.Router()

import {googlelogin} from '../controllers/auth.js'

router.route('/googlelogin').post(googlelogin);

export default router;
