'use strict';

/**
 * @ngdoc function
 * @name govtrackApp.controller:SearchCtrl
 * @description
 * # SearchCtrl
 * Controller of the govtrackApp
 */
angular.module('govtrackApp')
  .controller('SearchCtrl', function ($scope, $http, sharedVariables) {
	  $scope.searchquery = sharedVariables.getSearch();
	  $scope.$watch('searchquery', function(){
		  $http.get('https://www.govtrack.us/api/v2/bill?q='+$scope.searchquery+'&order_by=-current_status_date').
			  success(function(data) {
				  var p = data.objects;
				  $scope.posts = p; 
	      
			  });
	  });
	  $http.get('https://www.govtrack.us/api/v2/bill?q='+$scope.searchquery+'&order_by=-current_status_date').
		  success(function(data) {
			  var p = data.objects;
			  $scope.posts = p; 
			      
		  });

  });
