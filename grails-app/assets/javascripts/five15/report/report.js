//= wrapped
//= require /angular/angular
//= require /auth/auth
//= require_self
//= require_tree services
//= require_tree controllers
//= require_tree directives
//= require_tree domain
//= require_tree templates

angular.module("five15.report", ["five15.core"])
    .config(reportConfig);

function resolveUserProjects (projectFactory, authFactory) {
    var userId = authFactory.getCurrentUser().id;
    return projectFactory.retrieveForUser(userId);
}
    
function reportConfig($stateProvider, roles) {
    $stateProvider
        .state("report", {
            url: "/report",
            controller: "ReportController",
            controllerAs: "vm",
            templateUrl: "/five15/report/report.htm",
            data: {
                requiredRoles: [roles.USER]
            },
            resolve: {
                userProjects: resolveUserProjects
            }
        });
}


