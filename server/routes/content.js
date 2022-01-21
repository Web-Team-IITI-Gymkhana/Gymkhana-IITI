const express = require('express')
const router = express.Router()

const {addSection, updateSection, addSectionChild, updateSectionChild , deleteSectionChild, deleteSection} = require('../controllers/content')

router.route('/sections/:userName').post(addSection);
router.route('/sections/:userName/:sectionID').patch(updateSection).post(addSectionChild).delete(deleteSection);
router.route('/sections/:userName/:sectionID/:sectionChildID').patch(updateSectionChild).delete(deleteSectionChild);



module.exports = router

