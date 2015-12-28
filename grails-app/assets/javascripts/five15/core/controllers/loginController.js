//= wrapped

angular
    .module("five15.core")
    .controller("LoginController", LoginController);

function LoginController($state, authFactory) {
    var vm = this;

    function goToReport() {
        $state.go("report");
    }

    function badLogin() {
        vm.error = "Invalid credentials";
    }

    vm.doLogin = function() {
        authFactory.login(vm.login, vm.password)
            .then(goToReport, badLogin);
    };

    vm.clearError = function() {
        vm.error = "";
    };
}
