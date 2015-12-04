describe('Report Routes: ', function () {
    var $location, $state, $rootScope;

    beforeEach(angular.mock.module('report', function ($provide) {
        var userDataMock = {
            hasRoles: function() { return true; }
        };
        $provide.value('userData', userDataMock);

        var projectServiceMock = {
            retrieveForUser: function() { return []; }
        };
        $provide.value('projectFactory', projectServiceMock);
    }));

    beforeEach(angular.mock.inject(function (_$location_, _$state_, _$rootScope_) {
        $location = _$location_;
        $state = _$state_;
        $rootScope = _$rootScope_;
    }));

    describe('Index route: ', function () {
        beforeEach(angular.mock.inject(function ($templateCache) {
            $templateCache.put('/report/report.htm', 'report page');
        }));

        it('should load the main report', function () {
            $location.path('/report');
            $rootScope.$digest();
            expect($state.current.name).toBe('report');
        });
    });

});