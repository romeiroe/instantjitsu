angular.module('myApp').controller('mainCtrl', function($scope) {
   $scope.videos = [
      {name: 'Guard Passing', featured: true, published: new Date('1/1/2014')},
      {name: 'Spider Guard', featured: true, published: new Date('1/1/2014')},
      {name: 'Pressue Passing', featured: false, published: new Date('1/1/2014')},
      {name: 'Kimura Locks', featured: false, published: new Date('1/1/2014')},
      {name: 'Arm Bars', featured: true, published: new Date('1/1/2014')},
      {name: 'Arm Bar Counters', featured: false, published: new Date('1/1/2014')},
      {name: 'Take Downs', featured: true, published: new Date('1/1/2014')},
      {name: 'Competition Strategy', featured: false, published: new Date('1/1/2014')},
      {name: 'Turtle Attacks', featured: true, published: new Date('1/1/2014')},
      {name: 'Open Guard Sweeps', featured: true, published: new Date('1/1/2014')}
   ]
});