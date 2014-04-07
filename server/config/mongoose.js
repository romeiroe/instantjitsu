var mongoose = require('mongoose'),
    crypto = require('crypto');

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
      hashed_pwd: String
   });

   var User = mongoose.model('User', userSchema);

   // create default users if collection is empty
   User.find({}).exec(function(err,collection){
      if (collection.length === 0) {
         var salt, hash;
         salt = createSalt();
         hash = hashPwd(salt, 'eddie');
         User.create({firstName:'Eduardo', lastName:'Romeiro', username:'eddie', salt: salt, hashed_pwd: hash});
         salt = createSalt();
         hash = hashPwd(salt, 'carlos');
         User.create({firstName:'Carlos', lastName:'Miranda', username:'carlos', salt: salt, hashed_pwd: hash});
         salt = createSalt();
         hash = hashPwd(salt, 'noberto');
         User.create({firstName:'Norberto', lastName:'Caceres', username:'norberto', salt: salt, hashed_pwd: hash});
      }
   });
}

// salt function for hashing
function createSalt(){
   return crypto.randomBytes(128).toString('base64');
}

//returns hexed based representation of hashing
//password with given salt with sha1 algo
function hashPwd(salt, pwd){
   var hmac = crypto.createHmac('sha1', salt);
   return hmac.update(pwd).digest('hex');
}

