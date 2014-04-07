angular.module('myApp').factory('ijIdentity', function(){
   return {
      currentUser: undefined,
      isAuthenticated: function(){
         return !!this.currentUser;
      }
   }
})