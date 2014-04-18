angular.module('myApp').controller('userListCtrl', function($scope, ijUser) {
   $scope.users = ijUser.query();
});