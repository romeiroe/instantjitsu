angular.module('myApp').value('ijToastr', toastr);

angular.module('myApp').factory('ijNotifier', function(ijToastr){
   return {
      notify: function(msg){
         ijToastr.success(msg);
         console.log(msg);
      }
   }
});