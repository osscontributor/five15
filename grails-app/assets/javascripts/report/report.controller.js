(function () {
    'use strict';

    angular.module('five15.report')
        .controller('ReportController', ReportController);
    
    ReportController.$inject = ['userData'];
    
    function ReportController(userData) {
        var vm = this;
        
        vm.fullName = userData.fullName;
    }
})();