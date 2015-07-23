//= wrapped
'use strict';

angular.module('five15.auth')
    .config(configureInterceptors);

function configureInterceptors($httpProvider) {
    $httpProvider.interceptors.push('basicAuthInterceptor');
}


