'use strict';

/**
 * @ngdoc function
 * @name toasttestApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the toasttestApp
 */
angular.module('toasttestApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
