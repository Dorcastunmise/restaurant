(function () {
    "use strict";
    
    angular.module('public')
    .service('UserDataService',UserDataService);
    
    UserDataService.$inject = ['$http'];
    function UserDataService($http) {
      var service = this;
       service.user={
         first_name : "",
         last_name : "",
         email_address : "",
         phone_number : "",
         favorite_dish :""
    
       };
       service.submitted=false;
    
        service.submit= function(user)
        {
          service.user.first_name=user.first_name;
          service.user.last_name=user.last_name;
          service.user.email_address=user.email_address;
          service.user.phone_number=user.phone_number;
          service.user.favorite_dish=user.favorite_dish;
    
        return $http.get('https://omarsobhy-course5.herokuapp.com' + '/menu_items/'+service.user.favorite_dish+'.json/').then(function (response) {
            service.data= response.data;
            service.submitted=true;
          });
    
        }
    
    }
    
    })();