/**
 * CourseController
 *
 * @description :: Server-side logic for managing courses
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

var parentFinder = require('../services/parentFinder');

module.exports = {

  create: function (req, res) {
    var name = req.param('name');
    if (!name) {
      return res.badRequest('Course name is required!');
    }

    var courseId = req.param('id');
    var parent = req.param('parent');

    if (courseId === '0') {
      Course.create({name: name, parent: parent}, function (err, course) {
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
    var role = req.session.user.roleId;
    var x = Course;
    var list = {title: "Home", url: "/Home"};
    var nav_title = "Shaban";

    x.parent = 2;
    Course.find({parent: 0}).sort("id DESC").exec(function (err, courses) {
      if (err) {
        return res.negotiate(err);
      }
      if (role == 1) {
        return res.view('student_course_list',
          {
            layout: 'layout_private',
            courses: courses,
            list: list,
            nav_title: nav_title
          });
      } else {
        return res.view('course_list',
          {
            layout: 'layout_private',
            courses: courses,
            list: list,
            nav_title: nav_title
          });
      }
    });
    //  Course.find({parent: 0}).sort("id DESC").exec(function (err, courses) {
    //    if (err) {
    //      return res.negotiate(err);
    //    }
    //    return res.view('course_list', {courses: courses});
    //  });
    // console.log(require('path').resolve(sails.config.appPath));
  },

  edit: function (req, res) {
    var courseId = req.param('id');
    var role = req.session.user.roleId;
    var subCourse = Course;
    var list;

    Course.findOne({id: courseId}, function (err, course) {
      if (err) {
        return res.negotiate(err);
      }


      Lecture.find({course: courseId}).exec(function (err, lectures) {
        if (err) {
          return res.negotiate(err);
        }


        subCourse.find({parent: courseId}, function (err, subArray) {
          console.log(role);

          var arr = [];
          parentFinder.find_parent_course(course.id, arr, function (list) {

            console.log(list);

            if (role == 1) {
              return res.view('view_course', {
                layout: 'layout_private',
                nav_title: course.name,
                title: 'View Details',
                c: course,
                lectures: lectures,
                lecture: undefined,
                subCources: subArray,
                list: list
              });
            }
            else {
              return res.view('edit_course', {
                layout: 'layout_private',
                nav_title: course.name,
                title: 'Edit Course',
                c: course,
                lectures: lectures,
                lecture: undefined,
                subCources: subArray,
                list: list
              });
            }
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

