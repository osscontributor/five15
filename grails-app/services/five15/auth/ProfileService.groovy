/*
 * Copyright 2015 the original author or authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
package five15.auth

class ProfileService {

    static transactional = false

    protected profileData = [
        user:    [fullName: 'Jack User',    roles: ['USER']],
        manager: [fullName: 'Jilllll Manager', roles: ['USER', 'MANAGER']],
        admin:   [fullName: 'Irene Admin',  roles: ['USER', 'ADMIN']]
    ]

    def getProfileInformation(String username) {
        profileData[username]
    }
}
