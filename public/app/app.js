angular.module('myApp', ['ngResource', 'ngRoute']);

angular.module('myApp').config(function($routeProvider, $locationProvider){
   var routeRoleChecks = {
      admin: {auth: function(ijAuth) {
         return ijAuth.authorizeCurrentUserForRoute('admin');
      }}
   }

   $locationProvider.html5Mode(true);
   $routeProvider.
       when('/', {templateUrl: '/partials/main/main', controller: 'mainCtrl'}).
       when('/admin/users', {templateUrl: '/partials/admin/user-list', 
         controller: 'userListCtrl', resolve: routeRoleChecks.admin
      });
});

angular.module('myApp').run(function($rootScope, $location){
   $rootScope.$on('$routeChangeError', function(evt, current, previous, rejection){
      if (rejection === 'not authorized'){
         $location.path('/');
      }
   });
});