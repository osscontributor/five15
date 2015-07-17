//= wrapped
'use strict';

angular.module('five15.auth')
    .run(initializeStateChangeListener);

function initializeStateChangeListener(authStateChangeManager) {
    authStateChangeManager.initialize();
}
