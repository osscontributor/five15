//= wrapped

angular
    .module("five15.report")
    .controller("ReportController", ReportController);

function ReportController(authFactory, userProjects) {
    var vm = this;
    vm.projects = userProjects;
    vm.fullName = authFactory.getCurrentUser().fullName;
}