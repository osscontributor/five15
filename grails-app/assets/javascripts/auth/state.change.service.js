//= wrapped
'use strict';

angular.module('five15.auth')
    .factory('authStateChangeManager', authStateChangeManagerFactory);

function authStateChangeManagerFactory($rootScope, authService, $log, $state) {
    var authStateChangeManager = {};
    
    authStateChangeManager.initialize = function() {
        $rootScope.$on('$stateChangeStart', checkRoles);
    }

    function checkRoles(event, toState) {
        
        if (toState.data && toState.data.requiredRoles) {
            if (authService.getCurrentUser() === null) {
                $state.go('login');
            } else if (!authService.hasRoles(toState.data.requiredRoles)) {
                $log.debug('User does not have required roles to enter this state');
                event.preventDefault();
            }
        }
    }

    return authStateChangeManager;
}
