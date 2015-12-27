//= wrapped

angular
    .module("auth")
    .factory("authFactory", authFactory);

function authFactory($http, $q) {

    var authService = {
        login: login,
        getCredentials: getCredentials,
        getCurrentUser: getCurrentUser,
        hasRole: hasRole,
        hasRoles: hasRoles
    };

    var LOGIN_URL = "/profiles";
    var _user = null;
    var _credentials = null;

    function login(userLogin, password) {

        _credentials = {
            login: userLogin,
            password: password
        };

        return $http.get(LOGIN_URL + "/" + login + ".json").then(function loginResult(result) {
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