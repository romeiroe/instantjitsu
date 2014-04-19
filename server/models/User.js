var mongoose = require('mongoose'),
    encrypt = require('../utilities/encryption');

var userSchema = mongoose.Schema({
   firstName: {type: String, required: '{Path} is required!'},
   lastName: {type: String, required: '{Path} is required!'},
   username: {
      type: String, 
      required: '{Path} is required!',
      unique: true
   },
   salt: {type: String, required: '{Path} is required!'},
   hashed_pwd: {type: String, required: '{Path} is required!'},
   roles: [String]
});
userSchema.methods = {
   authenticate : function(passwordToMatch){
      return encrypt.hashPwd(this.salt, passwordToMatch) === this.hashed_pwd;
   },
   hasRole: function(role){
      return this.roles.indexOf(role) > -1;
   }
};

var User = mongoose.model('User', userSchema);

// create default users if collection is empty
function createDefaultUsers() {
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
};

module.exports.createDefaultUsers = createDefaultUsers;