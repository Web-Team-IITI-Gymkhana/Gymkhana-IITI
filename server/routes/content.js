const express = require('express')
const router = express.Router()

const {addSection, updateSection, deleteSection,saveSection} = require('../controllers/content')

router.route('/sections').post(addSection);
router.route('/sections/:sectionID').patch(updateSection).delete(deleteSection);
router.route('/sections/save/:sectionID').patch(saveSection);

module.exports = router

