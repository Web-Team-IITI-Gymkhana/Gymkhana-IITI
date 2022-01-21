const express = require('express');
const router = express.Router()

const {getAllUsers,addUser,getUser , updateGeneralDetails,publishVersion,deleteUser,autoSaveContent} = require('../controllers/users')

router.route('/').get(getAllUsers).post(addUser);
router.route('/:userName').get(getUser).post(publishVersion).patch(updateGeneralDetails).delete(deleteUser);

router.route('/autosave/:userName').patch(autoSaveContent)

module.exports = router
