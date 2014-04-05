var path = require('path');
var rootPath = path.normalize(__dirname + '/../../');

//for now i am not using seperate envs but im keeping both 
//objects here to remind me
module.exports= {
   development: {
      rootPath: rootPath,
      db: 'mongodb://localhost/instantjitsu',
      port: process.env.PORT || 3030
   },
   production: {
      rootPath: rootPath,
      db: 'mongodb://localhost/instantjitsu',
      port: process.env.PORT || 3030
   }
}