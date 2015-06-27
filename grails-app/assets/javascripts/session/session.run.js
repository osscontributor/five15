(function () {
    'use strict';
    
    angular.module('five15.session')
        .run(initializeStateChangeListener);
        
    initializeStateChangeListener.$inject = ['authStateChangeManager'];
        
    function initializeStateChangeListener (authStateChangeManager) {
        authStateChangeManager.initialize();
    }
})();
