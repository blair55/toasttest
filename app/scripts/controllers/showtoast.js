'use strict';

/**
 * @ngdoc function
 * @name toasttestApp.controller:ShowtoastCtrl
 * @description
 * # ShowtoastCtrl
 * Controller of the toasttestApp
 */
angular.module('toasttestApp')
  .controller('ShowtoastCtrl', function ($scope, ngToast) {
	  ngToast.create("a simple message");
  });
