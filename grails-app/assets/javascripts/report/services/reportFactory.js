//= wrapped

angular
    .module("report")
    .factory("reportFactory", reportFactory);

function reportFactory($q) {

    var reportService = {
        getLatestForUser: getLatestForUser
    };

    var stubbedReport = {
        projectId: 1234,
        weekEnding: "1955-11-05",
        projectName: "Some Project",
        thisWeek: [
            "did something great",
            "did something average"
        ],
        nextWeek: [
            "will do something else average"
        ],
        issues: [
            "the thing that was great wasn\"t actually all that great."
        ]
    };


    function getLatestForUser(userId) {
        return $q.when(stubbedReport);
    }

    return reportService;

}