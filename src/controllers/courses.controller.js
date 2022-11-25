
const CoursesController = {}

const Course = require('../models/Course');

CoursesController.getCourses = async (req, res) => {
    const courses = await Course.find();
    res.json(courses);
}

CoursesController.getContables = async (req, res) => {

    const courses = await Course.find();
    res.json(courses);
}




CoursesController.getCourse = async (req, res) => {
    const { id } = req.params;
    const course = await Course.findById(id);

    res.send(course);
}

CoursesController.createCourse = async (req, res) => {
    const newCourse = new Course(req.body);
    await newCourse.save();
    res.send({ message: "course created" });

}

CoursesController.editCourse = async (req, res) => {
    const { id } = req.params;
    await Course.findByIdAndUpdate(id, req.body);
    res.json({ status: "course updated" });
}

CoursesController.deleteCourse = async (req, res) => {
    const { id } = req.params;
    await Course.findByIdAndDelete(id);
    res.json({ status: "course deleted" });
}


module.exports = CoursesController;