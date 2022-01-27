const express = require('express')
const router = express.Router()

const {addSection, updateSection, addSectionChild, updateSectionChild , deleteSectionChild, deleteSection , changeSequence} = require('../controllers/content')

router.route('/sections').post(addSection);
router.route('/sections/:sectionID').patch(updateSection).post(addSectionChild).delete(deleteSection);
router.route('/sections/:sectionID/:sectionChildID').patch(updateSectionChild).delete(deleteSectionChild);
router.route('/sectionSequence/:sectionID').patch(changeSequence);



module.exports = router

