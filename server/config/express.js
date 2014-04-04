var express = require('express'),
var stylus = require('stylus');

module.exports = function(app, config) {
   function compile(str,path){
   return stylus(str).set('filename',path);
   }

   //configure and set up middleware
   app.configure(function() {
      app.set('views', config.rootPath + '/server/views');
      app.set('view engine', 'jade');
      app.use(express.logger('dev'));
      app.use(express.bodyParser());
      app.use(stylus.middleware(
       {
         src: config.rootPath + '/public',
         compile: compile
       }
    ));
      app.use(express.static(config.rootPath+ '/public'));
   });
}