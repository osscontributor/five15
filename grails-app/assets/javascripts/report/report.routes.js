(function () {
    'use strict';

    angular
        .module('five15.report')
        .config(configureRoutes);

    configureRoutes.$inject = ['$stateProvider', 'roles'];

    function configureRoutes ($stateProvider, roles) {
        $stateProvider
            .state('report', {
                url: '/report',
                controller: 'ReportController',
                controllerAs: 'vm',
                templateUrl: '/report/report.htm',
                data: {
                    requiredRoles: [roles.USER]
                }
            });
    }
})();