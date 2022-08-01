(function () {
    "use strict";
    
    angular.module('common')
    .service('UserService', UserService);
    
    
    UserService.$inject = [];
    function UserService() {
      var service = this;
    
      service.setUser = function (user) {
        service.user = user;
      };
    
      service.getUser = function (user) {
        return service.user;
      };
    
    }

})();