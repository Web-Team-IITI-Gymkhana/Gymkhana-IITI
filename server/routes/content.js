const express = require('express')
const router = express.Router()

const {addSection, updateSection, deleteSection,saveSection,saveSequence} = require('../controllers/content')

router.route('/sections').post(addSection).patch(saveSequence);
router.route('/sections/:sectionID').patch(updateSection).delete(deleteSection);
router.route('/sections/save/:sectionID').patch(saveSection);

module.exports = router

