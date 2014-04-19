angular.module('myApp').controller('ijVideoCtrl', function($scope, ijVideo){
   $scope.videos = ijVideo.query();
});