//Setting up route
window.app.config(['$routeProvider', function($routeProvider) {
	$routeProvider.
	when('/', { templateUrl: 'views/index.html' }).
	when('/trip-information', { templateUrl: 'views/trip-information.html' }).
	when('/young-professionals', { templateUrl: 'views/young-professionals.html' }).
	when('/students-trips', { templateUrl: 'views/students-trips.html' }).
	when('/signup', { templateUrl: 'views/signup/signup-wrapper.html' }).
	when('/how-to-register', { templateUrl: 'views/how-to-register.html' }).
	when('/trip-options', { templateUrl: 'views/trip-options.html' }).
	when('/contact-us', { templateUrl: 'views/contact-us.html' }).
	
	otherwise({redirectTo: '/'});

}]);

//Removing tomcat unspported headers
window.app.config(['$httpProvider', function($httpProvider, Configuration) {
    //delete $httpProvider.defaults.headers.common["X-Requested-With"];
}]);

//Setting HTML5 Location Mode
window.app.config(['$locationProvider', function($locationProvider) {
    //$locationProvider.html5Mode(true);
    $locationProvider.hashPrefix("!");
}]);