// wrapped
'use strict';

angular.module('five15.report')
    .controller('ReportController', ReportController);

function ReportController(userData, projectService) {
    var vm = this;

    vm.projects = [];
    
    vm.fullName = userData.fullName;
    
    projectService.retrieve(userData.userId).then(function(projects){
      vm.projects = projects;
    });
}
