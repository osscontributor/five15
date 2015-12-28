//= wrapped

angular.module("five15.core")
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
            templateUrl: "/five15/core/login.htm"
        });
}

function initializeStateChangeListener(authStateChangeManagerFactory) {
    authStateChangeManagerFactory.initialize();
}
