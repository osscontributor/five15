(function () {
    'use strict';

    function LoginController() {
        var vm = this;

        vm.doLogin = function doLogin() {
            vm.error = 'I haven\'t added the login logic yet.';
        };

        vm.clearError = function clearError() {
            vm.error = '';
        };
    }

    angular.module('five15.login')
        .controller('LoginController', LoginController);

})();