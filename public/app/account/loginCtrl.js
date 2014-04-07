angular.module('myApp').controller('loginCtrl', function($scope, $http, ijIdentity, ijNotifier){
   $scope.identity = ijIdentity;
   $scope.signin = function(username,password) {
      $http.post('/login', {userName:username, password:password}).then(function(response){
         if(response.data.success){
            ijIdentity.currentUser = response.data.user;
            ijNotifier.notifySuccess('You have successfully signed in!');
         }
         else{
            ijNotifier.notifyError('Username/Password combination incorrect!');
         }
      })
   }
});