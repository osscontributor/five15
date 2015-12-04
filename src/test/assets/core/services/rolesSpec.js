describe("core module", function() {

    beforeEach(angular.mock.module("core", function() {
    }));

    describe("roles", function() {

        var roles;

        beforeEach(angular.mock.inject(function(_roles_) {
            roles = _roles_;
        }));

        it("should be tested", function() {
            expect(true).toEqual(false);
        });

    });

});
