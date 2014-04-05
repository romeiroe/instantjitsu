var passport = require('passport');

module.exports = function(app){
   
   app.get('/partials/*', function(req, res){
      res.render('../../public/app/' + req.params);
   });

   app.post('/login', function(req,res,next){
      var auth = passport.authenticate('local', function(err, user){
         if (err){
            return next(err);
         }
         if(!user){
            res.send({success: false});
         }
      })
   });

   app.get('*', function(req, res){
      res.render('index');
   });
}