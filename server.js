var express = require('express'),
    mongoose = require('mongoose');

var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var app = express();

var config = {
  rootPath: __dirname
}

require('./server/config/express')(app, config);
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
