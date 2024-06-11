const express = require('express');
const router = express.Router();
const teacherController = require('./controllers');

router.get('/', teacherController.getAllteachers);
router.get('/:id', teacherController.getteacherById);
router.post('/', teacherController.createteacher);
router.put('/:id', teacherController.updateteacher);
router.delete('/:id', teacherController.deleteteacher);




module.exports = router;