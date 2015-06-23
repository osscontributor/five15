//= require login/module

(function(){
  'use strict';

  var app = angular.module('five15', ['ui.router', 'ui.bootstrap', 'ngAnimate', 'five15.login']);
  
  app.config(function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('/login');
    
    $stateProvider
      .state('login', {
        url: '/login',
        controller: 'LoginController',
        templateUrl: '/login/login.htm'
      });
  });

})();
