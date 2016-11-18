'use strict';

/**
 * @ngdoc function
 * @name govtrackApp.controller:LatestbillsCtrl
 * @description
 * # LatestbillsCtrl
 * Controller of the govtrackApp
 */
angular.module('govtrackApp')
  .controller('LatestbillsCtrl', function ($scope, $http) {
	  $http.get('https://www.govtrack.us/api/v2/bill?order_by=-current_status_date').
		  success(function(data) {
			  var p = data.objects;
			  $scope.posts = p; 
			      
		  });

  });
