angular.module('myApp').controller('ijVideoDetailCtrl', function($scope, ijCachedVideos, $routeParams){
   ijCachedVideos.query().$promise.then(function(collection) {
      collection.forEach(function(){
         if(video._id === $routeParams.id){
            $scope.course = course;
         }
      });
   })
});