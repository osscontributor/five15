//= wrapped
//= require /angular/angular
//= require /ui-router/angular-ui-router
//= require /auth/auth
//= require /report/report
//= require /angular-bootstrap/ui-bootstrap-tpls
//= require /angular/angular-animate
//= require_self
//= require_tree services
//= require_tree controllers
//= require_tree directives
//= require_tree domain
//= require_tree templates

angular.module("core", ['ui.router', 'auth', 'report', 'ui.bootstrap', 'ngAnimate']);
