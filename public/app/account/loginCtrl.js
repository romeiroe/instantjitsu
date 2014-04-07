angular.module('myApp').controller('loginCtrl', function($scope, $http){
   $scope.signin = function(username,password) {
      $http.post('/login', {userName:username, password:password}).then(function(response){
         if(response.data.success){
            ijNotifier.notify('You have successfully signed in!');
         }
         else{
            ijNotifier.notify('Username/Password combination incorrect!');
         }
      })
   }
});