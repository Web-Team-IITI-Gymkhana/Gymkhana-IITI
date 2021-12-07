const express = require('express')
const router = express.Router()

const {addSection, updateGeneralSection, getAllSections, getSectionChild,
    addSectionChild, getSection,updateSectionChild , deleteSectionChild , deleteSection} = require('../controllers/content')

router.route('/sections/:userName').get(getAllSections).post(addSection);
router.route('/sections/:userName/:sectionID').get(getSection).put(updateGeneralSection).post(addSectionChild).delete(deleteSection);
router.route('/sections/:userName/:sectionID/:sectionChildID').get(getSectionChild).put(updateSectionChild).delete(deleteSectionChild);

module.exports = router

