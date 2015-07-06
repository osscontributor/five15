//= wrapped
'use strict';

angular.module('five15.session')
    .controller('LoginController', LoginController);

function LoginController($state, profileService) {
    var vm = this;

    vm.clearError = clearError;
    vm.doLogin = doLogin;
    vm.error = '';

    vm.userId = '';
    vm.password = '';

    function clearError() {
        vm.error = '';
    }

    function doLogin() {
        profileService
            .retrieve(vm.userId, vm.password)
            .then(goToReport, badLogin);
    }

    function goToReport() {
        $state.go('report');
    }

    function badLogin() {
        vm.error = 'Invalid credentials';
    }
}
