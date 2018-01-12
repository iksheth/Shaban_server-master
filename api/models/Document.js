var uploader = require('../services/uploader');
var path = require('path');

module.exports = {
    attributes: {
        lecture: {
            model: 'lecture'
        },

        title: {
            type: 'string'
        },

        url : {
            type: 'string'
        },

        order: {
            type: 'integer'
        }
    },

    afterDestroy: function(documents, cb){
        for (document of documents) {
            if (document.url) {
                console.log("Deleting ", path.basename(document.url));
                uploader.removeFile(document.url);
            }
        }

        cb();
    },


}


