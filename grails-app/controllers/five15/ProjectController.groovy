package five15

class ProjectController {

    def projects(String username) {
        def projectNames = ['Project One', 'Project Two']
        respond projectNames
    }
}
