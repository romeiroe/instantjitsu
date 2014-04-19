angular.module('myApp').controller('ijVideoCtrl', function($scope, ijCachedVideos){
   $scope.videos = ijCachedVideos.query();

   $scope.sortOptions = [{value: "title", text:"Sort by Title"},
      {value: "published", text:"Sorth by published date"}];
   $scope.sortOrder = $scope.sortOptions[0].value;
});