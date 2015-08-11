//= require angular/angular
//= require angular-animate/angular-animate
//= require angular-bootstrap/ui-bootstrap-tpls
//= require ui-router/angular-ui-router
//= require_self
//= require auth/auth.module
//= require constants

angular.module('five15.core', ['ui.router', 'five15.auth', 'ui.bootstrap', 'ngAnimate']);