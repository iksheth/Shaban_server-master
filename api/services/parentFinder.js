/**
 * Created by karansheth on 27/01/18.
 */

var checker = function (err,c,cb,arr) {

  var url = "course/"+c.id+"/edit";
  arr.push({title: c.name, url: url});
  if(c.parent != 0){
    //  Find Parent
    cfo(c.parent, arr, cb)
  }
  else{
    //  Call back function
    cb(arr.reverse());
  }
};


var cfo = function (id, arr, cb) {
  Course.findOne({id:id},function (err,c) {
    checker(err,c,cb,arr);
  });
};


var lfo = function (id, arr, cb) {
  Lecture.findOne({id:id},function (err,l) {
    var url = "lecture/"+id+"/edit";
    arr.push({title: l.description, url: url});
    cfo(l.course, arr,cb);
  });
};


var rfo = function (id, arr, cb) {
  Resource.findOne({id:id},function (err,r) {
    var url = "resource/"+id+"/edit";
    arr.push({title: r.title, url: url});
    lfo(r.lecture, arr,cb);
  });
};

var dfo = function (id, arr, cb) {
  Document.findOne({id:id},function (err,d) {
    var url = "document/"+id+"/edit";
    arr.push({title: d.title, url: url});
    lfo(d.lecture, arr,cb);
  });
};


module.exports = {
  find_parent_course: cfo,
  find_parent_lecture: lfo,
  find_parent_resource: rfo,
  find_parent_document: dfo,
};
