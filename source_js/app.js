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
  when('/dashboard/:userName', {
    templateUrl: 'partials/dashboard.html',
    controller: 'dashboardController'
  }).
  when('/dashboard/:userName/race', {
    templateUrl: 'partials/race.html',
    controller: 'raceController'
  }).  
  when('/dashboard/:userName/class', {
    templateUrl: 'partials/class.html',
    controller: 'classController'
  }).
  when('/dashboard/:userName/feats', {
    templateUrl: 'partials/feats.html',
    controller: 'featsController'
  }).
  when('/dashboard/:userName/abilities', {
    templateUrl: 'partials/abilities.html',
    controller: 'abilitiesController'
  }).
  when('/dashboard/:userName/inventory', {
    templateUrl: 'partials/inventory.html',
    controller: 'inventoryController'
  }).
  when('/dashboard/:userName/final', {
    templateUrl: 'partials/final.html',
    controller: 'finalController'
  }).
  when('/dashboard/:userName/:characterID', {
    templateUrl: 'partials/character.html',
    controller: 'characterController'
  }).
   otherwise({
    redirectTo: '/login'
  });
}]);
