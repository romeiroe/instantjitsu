var crypto = require('crypto');

// salt function for hashing
module.exports.createSalt = function(){
   return crypto.randomBytes(128).toString('base64');
}

//returns hexed based representation of hashing
//password with given salt with sha1 algo
module.exports.hashPwd = function(salt, pwd){
   var hmac = crypto.createHmac('sha1', salt);
   return hmac.update(pwd).digest('hex');
}