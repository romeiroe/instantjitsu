var mongoose = require('mongoose'),
    userModel = require('../models/User'),
    videoModel = require('../models/Video');

module.exports = function(config){
   mongoose.connect(config.db);
   var db = mongoose.connection;
   db.on('error', console.error.bind(console, 'connection error....'));
   db.once('open', function callback() {
     console.log('instantjitsu db opened');
   });

   userModel.createDefaultUsers();
   videoModel.createDefaultVideos();
}


