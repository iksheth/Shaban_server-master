/**
 * ResourceController
 *
 * @description :: Server-side logic for managing resources
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

var path = require('path');

module.exports = {
  edit: function (req, res) {
    var id = req.param('id');
    Resource.findOne({id: id}, function (err, resource) {
      if (err) {
        return res.negotiate(err);
      }

      return res.view('edit_resource', {resource: resource});

    });
  },

  delete: function (req, res) {
    var resourceId = req.param('id');
    Resource.destroy({id: resourceId}, function (err, resource) {
      if (err) {
        return res.negotiate(err);
      }
      var resource = resource[0];
      return res.redirect('/lecture/' + resource.lecture + '/edit');
    });
  },

  create: function (req, res) {
    var title = req.param('title');
    var resourceId = req.param('id');
    var lectureId = req.param('lecture');
    var order = req.param('order');
    var url = req.param('url');

    if (!title || !lectureId || !order) {
      return res.badRequest('xxx title | order | file is required!');
    }

    // var uploadFile = function(document){
    //   uploader.uploadFile(req, 'document', function(folder){
    //     var documentURL = '/files/' + path.basename(folder);
    //
    //     if (document.url) {
    //       uploader.removeFile(document.url);
    //     }
    //
    //     Document.update({id: document.id}, {url: documentURL}, function(err, document){
    //       if (err) {
    //         return res.negotiate(err);
    //       }
    //       return res.redirect('/lecture/' + lectureId +'/edit');
    //     });
    //   }, function(err){
    //     if (err) {
    //       return res.negotiate(err);
    //     } else {
    //       return res.redirect('/lecture/' + lectureId +'/edit');
    //     }
    //   });
    // };

    if (resourceId === '0') {
      Resource.create({title: title, lecture: lectureId, order: order, url: url}, function (err, resource) {
        if (err) {
          return res.negotiate(err);
        }
        //uploadFile(document);
        return res.redirect('/lecture/' + lectureId + '/edit');
      });
    } else {
      Resource.update({id: resourceId}, {title: title, order: order, url: url},
        function (err, resource) {
          if (err) {
            return res.negotiate(err);
          }
          //uploadFile(document[0]);
          return res.redirect('/lecture/' + lectureId + '/edit');
        });
    }

  }

};


