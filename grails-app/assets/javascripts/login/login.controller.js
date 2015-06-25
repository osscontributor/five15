(function () {
    'use strict';

    angular.module('five15.login')
        .controller('LoginController', LoginController);
    
    function LoginController() {
        var vm = this;

        vm.clearError = clearError;
        vm.doLogin = doLogin;
        vm.error = '';
        
        function clearError() {
            vm.error = '';
        }
        
        function doLogin() {
            vm.error = 'I haven\'t added the login logic yet.';
        }
    }
})();