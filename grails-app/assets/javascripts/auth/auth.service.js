//= wrapped
'use strict';

angular.module('five15.auth')
    .factory('authService', authService);

function authService($http, basicAuthInterceptor, $q) {
    var authService = {};
    
    var LOGIN_URL = '/profiles';
    var _user = null;

    authService.login = function(login, password) {
        
        basicAuthInterceptor.setCredentials(login, password);
        
        return $http.get(LOGIN_URL + '/' + login + '.json').then(function(result) {
            _user = result.data;
        }, function(error){
            basicAuthInterceptor.clearCredentials();
            _user = null;
            return $q.reject(error);
        });
    }
    
    authService.getCurrentUser = function() {
        return _user;
    };

    authService.hasRole = function(role) {
        return _user.roles.indexOf(role) >= 0;
    };
    
    authService.hasRoles = function(roles) {
        return roles.every(authService.hasRole);
    };
    
    return authService;
}
