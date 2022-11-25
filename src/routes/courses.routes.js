const {Router} = require('express');

const coursesController = require('../controllers/courses.controller');

const router = Router();


router.get('/',coursesController.getCourses);
router.get('/:id',coursesController.getCourse);
router.post('/',coursesController.createCourse);
router.put('/:id',coursesController.editCourse);
router.delete('/:id',coursesController.deleteCourse);

//requests



module.exports = router;