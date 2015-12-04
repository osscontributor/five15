//= wrapped

angular
    .module("report")
    .factory("projectFactory", projectFactory);

function projectFactory($http, $log) {
    var projectFactory = {};

    projectFactory.retrieveForUser = function(userId) {
        function extractData (result) {
            return result.data;
        }

        function noProjects (result) {
            $log.debug("Unable to retrieve projects for " + userId + " : " + result.status + " : " + result.statusText);
            return [];
        }

        return $http.get('/projects.json?userId=' + userId).then(extractData, noProjects);
    };

    return projectFactory;

}
