module.exports = function(config) {
    config.set({
        basePath: '../assets/',
        frameworks: ['jasmine'],
        browsers: ['PhantomJS'],
        files: [
            'libs/bower/angular/angular.js', 
            'libs/bower/**/*.js',
            '**/*.module.js',
            '**/!(*.spec).js',
            '**/*.spec.js'
        ],
        exclude: [],
        preprocessors: {},
        reporters: ['progress'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_ERROR,
        autoWatch: true,
        singleRun: false
    });
};