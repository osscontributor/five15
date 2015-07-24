//= wrapped
'use strict';

angular.module('five15.auth')
    .factory('authService', authService);

function authService($http, $q) {
    
    var authService = {
        login: login,
        getCredentials: getCredentials,
        getCurrentUser: getCurrentUser,
        hasRole: hasRole,
        hasRoles: hasRoles
    };
    
    var LOGIN_URL = '/profiles';
    var _user = null;
    var _credentials = null;
    
    function login(login, password) {
        
        _credentials = {
            login: login,
            password: password
        };
        
        return $http.get(LOGIN_URL + '/' + login + '.json').then(function loginResult(result) {
            _user = result.data;
            return _user;
        }, function loginError(error){
            _credentials = null;
            _user = null;
            return $q.reject(error);
        });
    }
    
    function getCredentials() {
        return _credentials;
    }
    
    function getCurrentUser() {
        return _user;
    }

    function hasRole(role) {
        return _user.roles.indexOf(role) >= 0;
    }
    
    function hasRoles(roles) {
        return roles.every(authService.hasRole);
    }
    
    return authService;
}
