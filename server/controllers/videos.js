var Video = require('mongoose').model('Video');

module.exports.getVideos = function(req, res) {
   Video.find({}).exec(function(err, collection){
      res.send(collection);
   })
};