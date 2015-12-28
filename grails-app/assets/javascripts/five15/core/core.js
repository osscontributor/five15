//= wrapped
//= require /angular/angular
//= require /angular-base64/angular-base64
//= require /ui-router/angular-ui-router
//= require /angular-bootstrap/ui-bootstrap-tpls
//= require /angular/angular-animate
//= require_self
//= require auth
//= require_tree services
//= require_tree controllers
//= require_tree directives
//= require_tree domain
//= require_tree templates

angular.module("five15.core", ["ui.router", "ui.bootstrap", "ngAnimate", "base64"]);
