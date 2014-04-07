angular.module('Myapp').value('ijToastr', toastr);

angular.module('Myapp').factory('ijNotifier', function(ijToastr){
   return {
      notify: function(msg){
         ivToastr.success(msg);
         console.log(msg);
      }
   }
});