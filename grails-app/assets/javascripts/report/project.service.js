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
        var deferred = $q.defer();
        
        deferred.resolve(['Project 1', 'project 2']);
        
        return deferred.promise;
        
    }
}
