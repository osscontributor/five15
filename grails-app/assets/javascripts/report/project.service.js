//= wrapped
'use strict';

angular.module('five15.session')
    .factory('projectService', projectServiceFactory);

function projectServiceFactory(roles, userData, $http, $q) {
    var projectService = {
        retrieve: retrieve
    };

    return projectService;

    function retrieve(userId) {
        return $http.get('/projects/' + userId + '.json').then(function(result){return result.data;});
    }
}
