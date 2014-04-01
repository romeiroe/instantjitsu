angular.module('myApp', ['ngResource', 'ngRoute']);

angular.module('myApp').config(function($routeProvider, $locationProvider){
   $locationProvider.html5Mode(true);
   $routeProvider.when('/', {templateUrl: '/partials/main', controller: 'mainCtrl'});
});

angular.module('myApp').controller('mainCtrl', function($scope) {
   $scope.myVar = 'Hello Angular';
});