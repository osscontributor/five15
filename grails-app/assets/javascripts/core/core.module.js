//= require /bower/angular/angular
//= require /bower/angular-animate/angular-animate
//= require /bower/angular-ui-bootstrap-bower/ui-bootstrap-tpls
//= require /bower/ui-router/angular-ui-router
//= require_self
//= require /auth/auth.module
//= require constants

angular.module('five15.core', ['ui.router', 'five15.auth', 'ui.bootstrap', 'ngAnimate']);