var path = require('path');
var parentFinder = require('../services/parentFinder');

module.exports = {
    edit: function(req, res) {
        var id = req.param('id');
        Document.findOne({id: id}, function(err, document){
            if (err) {
                return res.negotiate(err);
            }

            var arr = [];
            parentFinder.find_parent_document(document.id, arr, function (list) {
              return res.view('edit_document', {
                layout: 'layout_private',
                nav_title: document.title,
                document: document,
                list: list
              });

            });

        });
    },

    delete: function(req, res) {
        var documentId = req.param('id');
        Document.destroy({id: documentId}, function(err, document){
            if (err) {
                return res.negotiate(err);
            }
            var document = document[0];
            return res.redirect('/lecture/' + document.lecture + '/edit');
        });
    },

    create: function(req, res){
        var title = req.param('title');
        var documentId = req.param('id');
        var lectureId = req.param('lecture');


        if (!title || !lectureId) {
            return res.badRequest('Document title | order | file is required!');
        }

        var uploadFile = function(document){
            uploader.uploadFile(req, 'document', function(folder){
                var documentURL = '/files/' + path.basename(folder);

                if (document.url) {
                    uploader.removeFile(document.url);
                }

                Document.update({id: document.id}, {url: documentURL}, function(err, document){
                    if (err) {
                        return res.negotiate(err);
                    }
                    return res.redirect('/lecture/' + lectureId +'/edit');
                });
            }, function(err){
                if (err) {
                    return res.negotiate(err);
                } else {
                    return res.redirect('/lecture/' + lectureId +'/edit');
                }
            });
        };

        if ( documentId === '0') {
            Document.create({title: title, lecture: lectureId}, function(err, document){
                if (err) {
                    return res.negotiate(err);
                }
                uploadFile(document);
            });
        } else {
            Document.update({id: documentId}, {title: title},
                function(err, document){
                    if (err) {
                        return res.negotiate(err);
                    }
                    uploadFile(document[0]);
            });
        }

    }

};
