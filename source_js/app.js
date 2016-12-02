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
  when('/dashboard', {
    templateUrl: 'partials/dashboard.html',
    controller: 'dashboardController'
  }).
  otherwise({
    redirectTo: '/settings'
  });
}]);
