import express from 'express'
const router = express.Router()

import {addSection, updateSection, deleteSection,saveSection,saveSequence} from '../controllers/content.js';

router.route('/sections').post(addSection).patch(saveSequence);
router.route('/sections/:sectionID').patch(updateSection).delete(deleteSection);
router.route('/sections/save/:sectionID').patch(saveSection);

export default router;

