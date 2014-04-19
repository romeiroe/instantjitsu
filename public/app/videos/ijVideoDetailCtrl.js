angular.module('myApp').controller('ijVideoDetailCtrl', function($scope, ijVideo, $routeParams){
   $scope.video = ijVideo.get({_id:$routeParams.id});
})