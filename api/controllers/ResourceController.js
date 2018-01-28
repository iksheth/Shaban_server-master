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

      var arr = [];
      parentFinder.find_parent_resource(id, arr, function (list) {
        return res.view('edit_resource', {
          layout: 'layout_private',
          nav_title: resource.title,
          resource: resource,
          list: list
        });
      });

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
    var url = req.param('url');

    if (!title || !lectureId) {
      return res.badRequest('Resource title |  | file is required!');
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
      Resource.create({title: title, lecture: lectureId, url: url}, function (err, resource) {
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


