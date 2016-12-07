var app = angular.module('mp4', ['ngRoute', 'mp4Controllers', 'mp4Services']);

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
    when('/login', {
    templateUrl: 'partials/login.html',
    controller: 'loginController'
  }).
  when('/register', {
    templateUrl: 'partials/register.html',
    controller: 'registerController'
  }).
  when('/settings', {
    templateUrl: 'partials/settings.html',
    controller: 'SettingsController'
  }).
  when('/races', {
    templateUrl: 'partials/races.html',
    controller: 'raceController'
  }).
  when('/abilities', {
    templateUrl: 'partials/abilities.html',
    controller: 'raceController'
  }).
  when('/dashboard/:userName', {
    templateUrl: 'partials/dashboard.html',
    controller: 'dashboardController'
  }).
  when('/dashboard/:userName/class', {
    templateUrl: 'partials/class.html',
    controller: 'classController'
  }).
  otherwise({
    redirectTo: '/login'
  });
}]);
