(function () {
    "use strict";
    
    angular.module('public')
    .component('signupForm', {
      templateUrl: 'src/public/signup-form/signup-form.html',
      bindings: {
      },
      controller: SignUpFormController
    });
    
     
    SignUpFormController.$inject = ['MenuService', 'UserService'];
    function SignUpFormController(MenuService, UserService) {
      var $ctrl = this;
      
      $ctrl.submit = function() {
        MenuService.getMenuItem($ctrl.user.favoriteItem)
        .then(function(result){
          $ctrl.wrongMenuItem = false;
          $ctrl.user.item = result;      
          UserService.setUser($ctrl.user);
          $ctrl.resultMessage = "Your information has been saved";
        })
        .catch(function(result){
          $ctrl.wrongMenuItem = true;
          $ctrl.resultMessage = "";
        });
        
      }
    }
    
    })();