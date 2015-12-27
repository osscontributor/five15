//= wrapped
//= require /angular/angular
//= require /angular-base64/angular-base64
//= require_self
//= require_tree services
//= require_tree controllers
//= require_tree directives
//= require_tree domain
//= require_tree templates

angular.module("auth", ["base64"])
    .config(authModuleConfig)
    .run(initializeStateChangeListener);

function authModuleConfig($httpProvider, $urlRouterProvider, $stateProvider) {
    $httpProvider.interceptors.push("basicAuthInterceptorFactory");

    $urlRouterProvider.otherwise("/login");

    $stateProvider
        .state("login", {
            url: "/login",
            controller: "LoginController",
            controllerAs: "vm",
            templateUrl: "/auth/login.htm"
        });
}

function initializeStateChangeListener(authStateChangeManagerFactory) {
    authStateChangeManagerFactory.initialize();
}
