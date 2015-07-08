//= wrapped
'use strict';

angular.module('five15.report')
    .factory('projectService', projectServiceFactory);

function projectServiceFactory (roles, userData, $http, $log) {
    var projectService = {
        retrieveForUser: retrieveForUser
    };

    return projectService;

    function retrieveForUser (userId) {
        
        function extractData (result) {
            return result.data;
        }
        
        function noProjects (result) {
            $log.debug("Unable to retrieve projects for " + userId + " : " + result.status + " : " + result.statusText);
            return [];
        }
        
        return $http.get('/projects.json?userId=' + userId).then(extractData, noProjects);
    }
}
