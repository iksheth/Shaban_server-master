/**
 * Course.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    name: {
      type: 'string'
    },
    desc: {type: 'string'},
    lectures: {
      collection: 'lecture',
      via: 'course'
    },
    parent: {
      type: 'integer',
      model: 'course'
    }


  },

  afterDestroy: function (courses, cb) {
    for (course of courses) {
      Lecture.destroy({course: course.id}).exec(function (err) {
        if (err) {
          console.log(err);
        }
      });
      Course.destroy({parent: course.id}).exec(function (err) {
        if (err) {
          console.log(err);
        }
      });
    }

    cb();
  },
};

