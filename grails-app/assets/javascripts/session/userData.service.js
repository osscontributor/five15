(function () {
    angular.module('five15.session')
        .factory('userData', userDataFactory);
        
        function userDataFactory () {
            var userData = {
                userId: '',
                password: '',
                fullName: '',
                roles: [],
                clear: clear,
                hasRole: hasRole,
                hasRoles: hasRoles
            };
            
            return userData;
            
            function clear () {
                userData.userId = '';
                userData.password = '';
                userData.fullName = '';
                userData.roles = [];
            }
            
            function hasRole (role) {
                return userData.roles.indexOf(role) >= 0;
            }
            
            function hasRoles (roles) {
                return roles.every(userData.hasRole);
            }
        }
    
})();