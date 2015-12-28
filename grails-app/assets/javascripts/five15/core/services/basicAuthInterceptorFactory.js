//= wrapped

angular
    .module("five15.core")
    .factory("basicAuthInterceptorFactory", basicAuthInterceptorFactory);

function basicAuthInterceptorFactory($base64, $injector) {

    var basicAuthInterceptor = {
        request: request
    };

    function request(config) {
        //Only add headers when credentials exist and we aren"t changing domains
        //This could be done better, but it gets the point across.

        var authService = $injector.get("authFactory");

        var credentials = authService.getCredentials();

        if(credentials && config.url.indexOf("http") !== 0){
            var encodedCreds = $base64.encode(credentials.login + ":" + credentials.password);
            config.headers.Authorization = "Basic " + encodedCreds;
        }

        return config;
    }

    return basicAuthInterceptor;
}