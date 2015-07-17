// wrapped
'use strict';

angular.module('five15.report')
    .controller('ReportController', ReportController);

ReportController.resolve = {
    userProjects: resolveUserProjects
};

function ReportController(userData, userProjects) {
    var vm = this;

    vm.projects = userProjects;
    
    vm.fullName = userData.fullName;
}

function resolveUserProjects (projectService, authService) {
    var userId = authService.getCurrentUser().id;
    return projectService.retrieveForUser(userId);
}

