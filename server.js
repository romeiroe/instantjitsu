var express = require('express'),
    stylus = require('stylus'),
    mongoose = require('mongoose');

var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var app = express();

function compile(str,path){
   return stylus(str).set('filename',path);
}

//configure and set up middleware
app.configure(function() {
   app.set('views', __dirname + '/server/views');
   app.set('view engine', 'jade');
   app.use(express.logger('dev'));
   app.use(express.bodyParser());
   app.use(stylus.middleware(
    {
      src: __dirname + '/public',
      compile: compile
    }
 ));
   app.use(express.static(__dirname + '/public'));
});

//connect to mongoose and put instance in variable
// log errors to console
mongoose.connect('mongodb://localhost/instantjitsu');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error....'));
db.once('open', function callback() {
  console.log('instantjitsu db opened');
});

app.get('/partials/*', function(req, res){
  res.render('../../public/app/' + req.params);
});

app.get('*', function(req, res){
   res.render('index');
});

var port = 3030;
app.listen(port);
console.log('Listening on port ' + port + '...');
