const express = require('express')
const router = express.Router()

const {getAllUsers,addUser,getUser , updateGeneralDetails,publishVersion,deleteUser} = require('../controllers/users')

//For database manipulation
router.route('/getAll').get(getAllUsers)
router.route('/addNew').post(addUser);
router.route('/deleteUser/:userName').delete(deleteUser)

router.route('/').get(getUser).post(publishVersion).patch(updateGeneralDetails);


module.exports = router
