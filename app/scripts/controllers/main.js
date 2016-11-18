'use strict';

/**
 * @ngdoc function
 * @name govtrackApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the govtrackApp
 */
angular.module('govtrackApp')
  .controller('MainCtrl', function ($scope, sharedVariables) {
	  $scope.$watch('searchquery',function(){
		  sharedVariables.setSearch($scope.searchquery);
	  }); 
  });
