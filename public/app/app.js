angular.module('myApp', ['ngResource', 'ngRoute']);

angular.module('myApp').config(function($routeProvider, $locationProvider){
   var routeRoleChecks = {
      admin: {auth: function(ijAuth) {
         return ijAuth.authorizeCurrentUserForRoute('admin');
      }},
      user: {auth: function (ijAuth){
        return ijAuth.authorizeAuthenticatedUserForRoute();
      }}
   }

   $locationProvider.html5Mode(true);
   $routeProvider.
       when('/', {templateUrl: '/partials/main/main', controller: 'mainCtrl'}).
       when('/admin/users', {templateUrl: '/partials/admin/user-list', 
         controller: 'userListCtrl', resolve: routeRoleChecks.admin}).
       when('/signup', {templateUrl: '/partials/account/signup',
          controller: 'ijSignupCtrl'}).
       when('/profile', {templateUrl: '/partials/account/profile',
          controller: 'ijProfileCtrl', resolve: routeRoleChecks.user
        }).
       when('/videos', {templateUrl: '/partials/videos/video-list',
          controller: 'ijVideoCtrl'}).
       when('/videos/:id', {templateUrl: '/partials/videos/video-details',
          controller: 'ijVideoDetailCtrl'});

});

angular.module('myApp').run(function($rootScope, $location){
   $rootScope.$on('$routeChangeError', function(evt, current, previous, rejection){
      if (rejection === 'not authorized'){
         $location.path('/');
      }
   });
});