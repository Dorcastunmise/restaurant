(function () {
    "use strict";

    angular.module('common')
    .service('MyInfoService', MyInfoService);

    MyInfoService.$inject = [];
    function MyInfoService() {
        var service = this;
        service.myInfo = {};

        service.setMyinfo = function(myInfo) {
            service.myInfo = myInfo;
            console.log('MyInfoService.setMyinfo() - myInfo:', service.myInfo);
        };

        service.getMyinfo = function () {
            return service.myInfo;
        };
    }
})();