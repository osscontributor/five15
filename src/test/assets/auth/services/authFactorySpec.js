describe("auth module", function() {

    beforeEach(angular.mock.module("auth", function() {
    }));

    describe("authFactory", function() {

        var authFactory;

        beforeEach(angular.mock.inject(function(_authFactory_) {
            authFactory = _authFactory_;
        }));

        it("should be tested", function() {
            expect(true).toEqual(false);
        });

    });

});
