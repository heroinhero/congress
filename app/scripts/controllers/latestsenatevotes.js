'use strict';

/**
 * @ngdoc function
 * @name govtrackApp.controller:LatestsenatevotesCtrl
 * @description
 * # LatestsenatevotesCtrl
 * Controller of the govtrackApp
 */
angular.module('govtrackApp')
  .controller('LatestsenatevotesCtrl', function ($scope, $http) {
	  $http.get('https://www.govtrack.us/api/v2/vote/?congress=115&chamber=senate&order_by=-created').
		  success(function(data) {
			  var p = data.objects;
			  $scope.posts = p; 
		  });
  });
