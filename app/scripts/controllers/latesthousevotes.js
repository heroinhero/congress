'use strict';

/**
 * @ngdoc function
 * @name govtrackApp.controller:LatesthousevotesCtrl
 * @description
 * # LatesthousevotesCtrl
 * Controller of the govtrackApp
 */
angular.module('govtrackApp')
  .controller('LatesthousevotesCtrl', function ($scope, $http) {
	  $http.get('https://www.govtrack.us/api/v2/vote/?congress=115&chamber=house&order_by=-created').
		  success(function(data) {
			  var p = data.objects;
			  $scope.posts = p; 
		  });
  });
