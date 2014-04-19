angular.module('myApp').controller('ijProfileCtrl', function($scope, ijAuth, ijIdentity, ijNotifier){
   $scope.email = ijIdentity.currentUser.username;
   $scope.fname = ijIdentity.currentUser.firstName;
   $scope.lname = ijIdentity.currentUser.lastName;
   
   $scope.update = function(){
      var newUserData = {
         username: $scope.email,
         firstName: $scope.fname,
         lastName: $scope.lname
      }
      if($scope.password && $scope.password.length > 0) {
         newUserData.password = $scope.password;
      }

      ijAuth.updateCurrentUser(newUserData).then(function(){
         ijNotifier.notifySuccess('Your user account has been updated');
      }, function(reason){
         ijNotifier.notifyError(reason);
      })
   }
});