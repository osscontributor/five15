package five15.auth

import grails.test.mixin.TestFor
import spock.lang.Specification

@TestFor(ProfileController)
class ProfileControllerSpec extends Specification {

    void 'test successful authentication'() {
        given:
        controller.profileService = [getProfileInformation: { String s -> [name: 'Jeff']}]

        when:
        params.username = 'user'
        controller.authenticate()

        then:
        response.status == 200
    }

    void 'test unsuccessful authentication'() {
        given:
        controller.profileService = [getProfileInformation: { String s -> null}]

        when:
        params.username = 'user'
        controller.authenticate()

        then:
        response.status == 403
    }
}
