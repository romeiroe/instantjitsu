angular.module('myApp').factory('ijVideo',function($resource){
   var VideoResource = $resource('/api/videos/:_id', {_id: "@id"}, {
      update: {method: 'PUT', isArray: false}
   });

   return VideoResource;
});