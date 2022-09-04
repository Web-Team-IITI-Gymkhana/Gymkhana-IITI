import express from 'express'
const router = express.Router()

import {getAllUsers,addUser,getUser , updateGeneralDetails,publishVersion,deleteUser} from '../controllers/users.js'

//For database manipulation
router.route('/getAll').get(getAllUsers)
router.route('/addNew').post(addUser);
router.route('/deleteUser/:userName').delete(deleteUser)

router.route('/').get(getUser).post(publishVersion).patch(updateGeneralDetails);


export default router;
