/**
 * Resource.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

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
  },

  // afterDestroy: function(resources, cb){
  //   for (resource of resources) {
  //     if (resource.url) {
  //       console.log("Deleting ", path.basename(resource.url));
  //       //uploader.removeFile(resource.url);
  //     }
  //   }
  //
  //   cb();
  // },


};

