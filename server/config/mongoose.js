var mongoose = require('mongoose'),
    encrypt = require('../utilities/encryption');

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
      username: String,
      salt: String,
      hashed_pwd: String,
      roles: [String]
   });
   userSchema.methods = {
      authenticate : function(passwordToMatch){
         return encrypt.hashPwd(this.salt, passwordToMatch) === this.hashed_pwd;
      }
   }

   var User = mongoose.model('User', userSchema);

   // create default users if collection is empty
   User.find({}).exec(function(err,collection){
      if (collection.length === 0) {
         var salt, hash;
         salt = encrypt.createSalt();
         hash = encrypt.hashPwd(salt, 'eddie');
         User.create({firstName:'Eduardo', lastName:'Romeiro', username:'eddie', salt: salt, hashed_pwd: hash, roles: ['admin']});
         salt = encrypt.createSalt();
         hash = encrypt.hashPwd(salt, 'carlos');
         User.create({firstName:'Carlos', lastName:'Miranda', username:'carlos', salt: salt, hashed_pwd: hash, roles: []});
         salt = encrypt.createSalt();
         hash = encrypt.hashPwd(salt, 'noberto');
         User.create({firstName:'Norberto', lastName:'Caceres', username:'norberto', salt: salt, hashed_pwd: hash});
      }
   });
}


