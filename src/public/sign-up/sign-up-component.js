(function () {
    "use strict";
    
    angular.module('public')
    .component('signUp', {
      templateUrl: 'src/public/sign-up/sign-up-component.html',
      controller: RegController
    })
    
    RegController.$inject = ['UserDataService'];
    function RegController(UserDataService) {
      var $ctrl = this;
      $ctrl.user = {
        first_name : "",
        last_name : "",
        email_address : "",
        phone_number : "",
        favorite_dish :""
      };
      $ctrl.submitted  = false;
      $ctrl.error = false;
      $ctrl.submit= function(){
      //  console.log('submitted', $ctrl.submitted );
        UserDataService.submit($ctrl.user).then(function(result){
          $ctrl.submitted  = true;
          $ctrl.error = false;
        },function(error){
          $ctrl.error = true;
          $ctrl.submitted  = false;
        })
      //  console.log('submitted', $ctrl.submitted );
      };
    
    
    }
    
    
    
    })();