angular.module('myApp').factory('ijCachedVideos', function(ijVideo){
   var videoList;

   return {
      query: function(){
         if(!videoList){
            videoList = ijVideo.query();
         }

         return videoList;
      }
   }
});