//= wrapped
'use strict';

angular.module('five15.auth')
    .controller('LoginController', LoginController);

function LoginController($state, authService) {
    var vm = this;

    function goToReport() {
        $state.go('report');
    }

    function badLogin() {
        vm.error = 'Invalid credentials';
    }

    vm.doLogin = function() {
        authService.login(vm.login, vm.password)
            .then(goToReport, badLogin);
    }
    
    vm.clearError = function() {
        vm.error = '';
    }
}
