angular.module('myApp').controller('ijSignupCtrl', function($scope, ijNotifier, $location, ijAuth, ijUser){
   $scope.signup = function(){
      var newUserData = {
         username: $scope.email,
         password: $scope.password,
         firstname: $scope.fname,
         lastname: $scope.lname
      };

      ijAuth.createUser(newUserData).then(function(){
         ijNotifier.notifySuccess('User account created! Welcome to Insant Jitsu!');
         $location.path('/');
      }, function(reason){
         ijNotifier.notifyError(reason);
      })
   }
});