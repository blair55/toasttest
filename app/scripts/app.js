'use strict';

/**
 * @ngdoc overview
 * @name toasttestApp
 * @description
 * # toasttestApp
 *
 * Main module of the application.
 */
angular
  .module('toasttestApp', [
    'ngRoute', 'ngToast'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/showtoast', {
        templateUrl: 'views/showtoast.html',
        controller: 'ShowtoastCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
