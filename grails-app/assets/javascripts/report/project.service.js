//= wrapped
'use strict';

angular.module('five15.report')
    .factory('projectService', projectServiceFactory);

function projectServiceFactory (roles, userData, $http, $q) {
    var projectService = {
        retrieveForUser: retrieveForUser
    };

    return projectService;

    function retrieveForUser (userId) {
        
        function extractData (result) {
            return result.data;
        }
        
        return $http.get('/projects.json?userId=' + userId).then(extractData);
    }
}
