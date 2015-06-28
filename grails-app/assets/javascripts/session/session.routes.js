//= wrapped
'use strict';

angular
    .module('five15.session')
    .config(configureRoutes);

function configureRoutes($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/login');

    $stateProvider
        .state('login', {
            url: '/login',
            controller: 'LoginController',
            controllerAs: 'vm',
            templateUrl: '/session/login.htm'
        });
}


