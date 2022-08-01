(function() {
    'use strict';

    angular.module('public')
    .controller('MyInfoController', MyInfoController);

    MyInfoController.$inject = ['userInfo'];
    function MyInfoController(userInfo) {
        var ctrl = this;
        ctrl.userInfo = userInfo;
        ctrl.saved = !angular.equals(userInfo, {});

        console.log('instantiated MyInfoController:', userInfo);

    }
})();