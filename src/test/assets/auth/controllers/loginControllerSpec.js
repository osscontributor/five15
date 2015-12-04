describe("auth module", function() {
    var scope;

    beforeEach(angular.mock.module("auth", function() {
    }));

    beforeEach(angular.mock.inject(function($rootScope) {
        scope = $rootScope.$new();
    }));

    describe("LoginController", function() {

        var ctrl;

        beforeEach(angular.mock.inject(function($controller) {
            ctrl = $controller("LoginController", {});
        }));

        it("should be tested", function() {
            expect(true).toEqual(false);
        });

    });

});
