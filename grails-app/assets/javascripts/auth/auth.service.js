//= wrapped
'use strict';

angular.module('five15.auth')
    .factory('authService', authService);

function authService($http) {
    var authService = {};
    
    var LOGIN_URL = '/auth/login';
    var _user = null;

    authService.login = function(login, password) {
        var data = {login: login, password: password};
        
        return $http.post(LOGIN_URL, data).then(function(result) {
            _user = result;
        });
    }

    authService.getCurrentUser = function() {
        return _user;
    }

    authService.hasRole = function(role) {
        return _user.roles.indexOf(role) >= 0;
    }
    
    authService.hasRoles = function(roles) {
        return roles.every(authService.hasRole);
    }
    
    return authService;
}
