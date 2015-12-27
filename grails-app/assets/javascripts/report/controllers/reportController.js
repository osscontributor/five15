//= wrapped

angular
    .module("report")
    .controller("ReportController", ReportController);

function ReportController(authFactory, userProjects) {
    var vm = this;
    vm.projects = userProjects;
    vm.fullName = authFactory.getCurrentUser().fullName;
}