describe("report module", function() {

    beforeEach(angular.mock.module("report", function() {
    }));

    describe("projectFactory", function() {

        var projectFactory;

        beforeEach(angular.mock.inject(function(_projectFactory_) {
            projectFactory = _projectFactory_;
        }));

        it("should be tested", function() {
            expect(true).toEqual(false);
        });

    });

});
