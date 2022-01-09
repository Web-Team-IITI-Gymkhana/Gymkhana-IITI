const express = require('express')
const router = express.Router()

const {addSection, updateSection, getCurrentSections,getPublishedSections, getCurrentSectionChild, getPublishedSectionChild,
  addSectionChild, getCurrentSection,getPublishedSection,updateSectionChild , deleteSectionChild, deleteSection} = require('../controllers/content')

router.route('/sections/:userName').get(getCurrentSections).post(addSection);
router.route('/sections/:userName/:sectionID').get(getCurrentSection).patch(updateSection).post(addSectionChild).delete(deleteSection);
router.route('/sections/:userName/:sectionID/:sectionChildID').get(getCurrentSectionChild).patch(updateSectionChild).delete(deleteSectionChild);

router.route('/sections/:userName/:publishedVersion').get(getPublishedSections);
router.route('/sections/:userName/:publishedVersion/:sectionID').get(getPublishedSection);
router.route('/sections/:userName/:publishedVersion/:sectionID/:sectionChildID').get(getPublishedSectionChild);

module.exports = router

