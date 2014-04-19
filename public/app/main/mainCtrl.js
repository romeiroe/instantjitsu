angular.module('myApp').controller('mainCtrl', function($scope, ijCachedVideos) {
   $scope.videos = ijCachedVideos.query();
});