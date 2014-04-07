var mongoose = require('mongoose');

module.exports = function(config){
   mongoose.connect(config.db);
   var db = mongoose.connection;
   db.on('error', console.error.bind(console, 'connection error....'));
   db.once('open', function callback() {
     console.log('instantjitsu db opened');
   });

   var userSchema = mongoose.Schema({
      firstName: String,
      lastName: String,
      username: String
   });

   var User = mongoose.model('User', userSchema);

   // create default users if collection is empty
   User.find({}).exec(function(err,collection){
      if (collection.length === 0) {
         User.create({firstName:'Eduardo', lastName:'Romeiro', username:'eddie'});
         User.create({firstName:'Carlos', lastName:'Miranda', username:'carlos'});
         User.create({firstName:'Norberto', lastName:'Caceres', username:'norberto'});
      }
   });
}