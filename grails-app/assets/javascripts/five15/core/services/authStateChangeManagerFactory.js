//= wrapped

angular
    .module("five15.core")
    .factory("authStateChangeManagerFactory", authStateChangeManagerFactory);

function authStateChangeManagerFactory($rootScope, authFactory, $log, $state) {
    var authStateChangeManager = {};

    authStateChangeManager.initialize = function() {
        $rootScope.$on("$stateChangeStart", checkRoles);
    };

    function checkRoles(event, toState) {
        if (toState.data && toState.data.requiredRoles) {
            if (!authFactory.getCurrentUser()) {
                $state.go("login");
            } else if (!authFactory.hasRoles(toState.data.requiredRoles)) {
                $log.debug("User does not have required roles to enter this state");
                event.preventDefault();
            }
        }
    }

    return authStateChangeManager;
}