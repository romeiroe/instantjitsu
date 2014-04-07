angular.module('myApp').controller('loginCtrl', function($scope, $http, ijIdentity, ijNotifier, ijAuth){
   $scope.identity = ijIdentity;
   $scope.signin = function(username,password) {
      ijAuth.authenticateUser(username,password).then(function(success){
         if(success){
            ijNotifier.notifySuccess('You have successfully signed in!');
         }
         else{
            ijNotifier.notifyError('Username/Password combination incorrect!');
         }
      });
   }
});