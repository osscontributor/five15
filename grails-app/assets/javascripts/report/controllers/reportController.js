//= wrapped

angular
    .module("report")
    .controller("ReportController", ReportController);

ReportController.resolve = {
    userProjects: resolveUserProjects
};

function ReportController(authFactory, userProjects) {
    var vm = this;
    vm.projects = userProjects;
    vm.fullName = authFactory.getCurrentUser().fullName;
}

function resolveUserProjects (projectFactory, authFactory) {
    var userId = authFactory.getCurrentUser().id;
    return projectFactory.retrieveForUser(userId);
}