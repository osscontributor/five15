describe("report module", function() {

    beforeEach(angular.mock.module("report", function() {
    }));

    describe("reportFactory", function() {

        var reportFactory;

        beforeEach(angular.mock.inject(function(_reportFactory_) {
            reportFactory = _reportFactory_;
        }));

        it("should be tested", function() {
            expect(true).toEqual(false);
        });

    });

});
