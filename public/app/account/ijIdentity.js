angular.module('myApp').factory('ijIdentity', function($window, ijUser){
   var currentUser;
   if(!!$window.bootstrappedUserObject){
      currentUser = new ijUser();
      angular.extend(currentUser, $window.bootstrappedUserObject);
   }
   return {
      currentUser: currentUser,
      isAuthenticated: function(){
         return !!this.currentUser;
      },
      isAuthorized: function(role){
         return !!this.currentUser && this.currentUser.roles.indexOf(role) > -1;
      }
   }
});