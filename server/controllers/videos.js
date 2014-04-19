var Video = require('mongoose').model('Video');

module.exports.getVideos = function(req, res) {
   Video.find({}).exec(function(err, collection){
      res.send(collection);
   })
};

module.exports.getVideoById = function(req, res) {
   Video.findOne({_id:req.params.id}).exec(function(err, video){
      res.send(video)
   });
};