angular.module('myApp').controller('mainCtrl', function($scope, ijVideo) {
   $scope.videos = ijVideo.query();
});