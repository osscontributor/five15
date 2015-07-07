package five15

class ProjectController {

    def projects(String userId) {
        def projectNames = ['Project One', 'Project Two']
        respond projectNames
    }
}
