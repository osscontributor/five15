//= wrapped
angular.module('five15.session')
    .factory('profileService', profileServiceFactory);

function profileServiceFactory($q, roles, userData) {
    var profileService = {
        retrieve: retrieve
    };

    var tempUserMap = {
        'user:user': {
            fullName: 'Jack User',
            roles: [roles.USER]
        },
        'manager:manager': {
            fullName: 'Jill Manager',
            roles: [roles.USER, roles.MANAGER]
        },
        'admin:admin': {
            fullName: 'Irene Admin',
            roles: [roles.USER, roles.ADMIN]
        }
    };

    return profileService;

    function retrieve(userId, password) {
        var deferred = $q.defer();

        var userProfile = tempUserMap[userId + ':' + password];

        if (userProfile) {
            userData.userId = userId;
            userData.password = password;
            userData.fullName = userProfile.fullName;
            userData.roles = userProfile.roles;

            deferred.resolve(userData);
        } else {
            userData.clear();

            deferred.reject();
        }

        return deferred.promise;
    }


}
