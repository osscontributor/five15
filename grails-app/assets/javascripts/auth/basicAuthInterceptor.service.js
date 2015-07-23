//= wrapped
'use strict';

angular.module('five15.auth')
    .factory('basicAuthInterceptor', basicAuthInterceptorFactory);

function basicAuthInterceptorFactory($base64) {
    
    var _credentials = null;
    
    var basicAuthInterceptor = {
        request: request,
        setCredentials: setCredentials,
        clearCredentials: clearCredentials
    };
    
    function setCredentials(login, password) {
        _credentials = {
            login: login,
            password: password
        };
    }
    
    function clearCredentials() {
        _credentials = null;
    }
    
    function request(config) {
      //Only add headers when credentials exist and we aren't changing domains
      //This could be done better, but it gets the point across.
      
      if(_credentials && config.url.indexOf('http') !== 0){
          var encodedCreds = $base64.encode(_credentials.login + ':' + _credentials.password);
          config.headers['Authorization'] = 'Basic ' + encodedCreds;
      }
      
      return config;
    }

    return basicAuthInterceptor;
}
