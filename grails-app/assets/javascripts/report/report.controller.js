// wrapped
'use strict';

angular.module('five15.report')
    .controller('ReportController', ReportController);

function ReportController(userData) {
    var vm = this;

    vm.fullName = userData.fullName;
}
