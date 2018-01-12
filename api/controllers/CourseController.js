/**
 * CourseController
 *
 * @description :: Server-side logic for managing courses
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

  create: function (req, res) {
    var name = req.param('name');
    if (!name) {
      return res.badRequest('Course name is required!');
    }

    var courseId = req.param('id');
    var parent = req.param('parent');
    console.log(req);

    if (courseId === '0') {
      Course.create({name: name,parent:parent}, function (err, course) {
        if (err) {
          return res.negotiate(err);
        }
        return res.redirect('back');
      });
    } else {
      Course.update({id: courseId}, {name: name}, function (err, updated) {
        if (err) {
          return res.negotiate(err);
        }
        return res.redirect('back');
      });
    }
  },

  list: function (req, res) {
    Course.find({parent: 0}).sort("id DESC").exec(function (err, courses) {
      if (err) {
        return res.negotiate(err);
      }
      return res.view('course_list', {courses: courses});
    });
   console.log(require('path').resolve(sails.config.appPath));
  },

  edit: function (req, res) {
    var courseId = req.param('id');
    var subCourse = Course;

    Course.findOne({id: courseId}, function (err, course) {
      if (err) {
        return res.negotiate(err);
      }


      Lecture.find({course: courseId}).sort("serial_number ASC").exec(function (err, lectures) {
        if (err) {
          return res.negotiate(err);
        }


        subCourse.find({parent: courseId}, function (err, subArray) {

          return res.view('edit_course', {
            title: 'Edit Course',
            c: course,
            lectures: lectures,
            lecture: undefined,
            subCources: subArray
          });
        });


      });


    });
  },

  delete: function (req, res) {
    var courseId = req.param('id');
    Course.destroy({id: courseId}, function (err, course) {
      if (err) {
        return res.negotiate(err);
      }
      return res.redirect('back');
    });

  }

};

