describe("auth module", function() {

    beforeEach(angular.mock.module("auth", function() {
    }));

    describe("stateChangeManagerFactory", function() {

        var stateChangeManagerFactory;

        beforeEach(angular.mock.inject(function(_stateChangeManagerFactory_) {
            stateChangeManagerFactory = _stateChangeManagerFactory_;
        }));

        it("should be tested", function() {
            expect(true).toEqual(false);
        });

    });

});
