//= wrapped
//= require /angular/angular
//= require /auth/auth
//= require_self
//= require_tree services
//= require_tree controllers
//= require_tree directives
//= require_tree domain
//= require_tree templates

angular.module("report", ["auth"])
    .config(reportConfig);


function reportConfig($stateProvider, roles) {
    $stateProvider
        .state('report', {
            url: '/report',
            controller: 'ReportController',
            controllerAs: 'vm',
            templateUrl: '/report/report.htm',
            data: {
                requiredRoles: [roles.USER]
            },
            resolve: ReportController.resolve
        });
}

