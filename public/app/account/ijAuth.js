angular.module('myApp').factory('ijAuth', function($http, ijIdentity, $q, ijUser){
   return {
      authenticateUser: function(username,password) {
         var dfd = $q.defer();
         $http.post('/login', {username:username, password:password}).then(function(response){
            if(response.data.success){
               var user = new ijUser();
               angular.extend(user, response.data.user);
               ijIdentity.currentUser = user;
               dfd.resolve(true);
            }
            else{
               dfd.resolve(false);
            }
         });
         return dfd.promise;
      },

      createUser: function(newUserData){
         var newUser = new ijUser(newUserData);
         var dfd = $q.defer();

         newUser.$save().then(function(){
            ijIdentity.currentUser = newUser;
            dfd.resolve();
         }, function(response) {
            dfd.reject(response.data.reason);
         });
         
         return dfd.promise;
      },
      
      logoutUser: function(){
         var dfd = $q.defer();
         $http.post('/logout', {logout: true}).then(function(){
            ijIdentity.currentUser = undefined;
            dfd.resolve();
         });
         return dfd.promise;
      },
      authorizeCurrentUserForRoute: function(role) {
         if (ijIdentity.isAuthorized(role)){
               return true;
         }
         else {
            return $q.reject('not authorized');
         }
      },
      authorizeAuthenticatedUserForRoute: function() {
         if(ijIdentity.isAuthenticated()){
            return true;
         }
         else{
            return $q.reject('not authorized');
         }
      }
   }
});