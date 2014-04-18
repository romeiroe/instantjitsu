angular.module('myApp').value('ijToastr', toastr);

angular.module('myApp').factory('ijNotifier', function(ijToastr){
   return {
      notifySuccess: function(msg){
         ijToastr.success(msg);
         console.log(msg);
      },
      notifyError: function(msg){
         ijToastr.error(msg);
         console.log(msg);
      }
   }
});