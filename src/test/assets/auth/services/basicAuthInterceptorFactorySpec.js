describe("auth module", function() {

    beforeEach(angular.mock.module("auth", function() {
    }));

    describe("basicAuthInterceptorFactory", function() {

        var basicAuthInterceptorFactory;

        beforeEach(angular.mock.inject(function(_basicAuthInterceptorFactory_) {
            basicAuthInterceptorFactory = _basicAuthInterceptorFactory_;
        }));

        it("should be tested", function() {
            expect(true).toEqual(false);
        });

    });

});
