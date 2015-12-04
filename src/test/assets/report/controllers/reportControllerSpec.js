describe("report module", function() {
    var scope;

    beforeEach(angular.mock.module("report", function() {
    }));

    beforeEach(angular.mock.inject(function($rootScope) {
        scope = $rootScope.$new();
    }));

    describe("ReportController", function() {

        var ctrl;

        beforeEach(angular.mock.inject(function($controller) {
            ctrl = $controller("ReportController", {});
        }));

        it("should be tested", function() {
            expect(true).toEqual(false);
        });

    });

});
