//= wrapped
'use strict';

angular.module('five15.auth')
    .config(configureRoutes);

function configureRoutes($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/login');

    $stateProvider
        .state('login', {
            url: '/login',
            controller: 'LoginController',
            controllerAs: 'vm',
            templateUrl: '/auth/login.htm'
        });
}


