(function () {
    "use strict";
    
    angular.module('public')
    .controller('InfoController', InfoController);
    
    InfoController.$inject = ['UserDataService'];
    function InfoController(UserDataService) {
      var ctrl = this;
    
      ctrl.submitted=UserDataService.submitted;
      ctrl.user=UserDataService.user;
      ctrl.item=UserDataService.data;
    }
    
    })();