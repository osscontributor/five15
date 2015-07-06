//= wrapped
'use strict';

angular.module('five15.session')
    .factory('profileService', profileServiceFactory);

function profileServiceFactory(roles, userData, $http) {
    var profileService = {
        retrieve: retrieve
    };

    return profileService;

    function retrieve(userId, password) {

        function extractDataFromResult(result) {
            userData.populate(userId, password, result.data.fullName, result.data.roles);

            return userData;
        }
        
        return $http.get('/profiles/' + userId + '.json').then(extractDataFromResult);
    }
}
