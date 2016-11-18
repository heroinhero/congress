'use strict';

/**
 * @ngdoc overview
 * @name govtrackApp
 * @description
 * # govtrackApp
 *
 * Main module of the application.
 */
angular
  .module('govtrackApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/search.html',
        controller: 'SearchCtrl',
        controllerAs: 'search'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/search', {
        templateUrl: 'views/search.html',
        controller: 'SearchCtrl',
        controllerAs: 'search'
      })
      .when('/latestbills', {
        templateUrl: 'views/latestbills.html',
        controller: 'LatestbillsCtrl',
        controllerAs: 'latestbills'
      })
      .when('/latestsenatevotes', {
        templateUrl: 'views/latestsenatevotes.html',
        controller: 'LatestsenatevotesCtrl',
        controllerAs: 'latestsenatevotes'
      })
      .when('/latesthousevotes', {
        templateUrl: 'views/latesthousevotes.html',
        controller: 'LatesthousevotesCtrl',
        controllerAs: 'latesthousevotes'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
	.service('sharedVariables', function(){
		var searchquery = '';
		return {
			getSearch: function(){
				return searchquery;
			},
			setSearch: function(value){
				searchquery = value;
			}
		};
	})
	.controller('HeaderCtrl', function ($scope, $location) { 
	    $scope.isactive = function (viewLocation) { 
		 return viewLocation === $location.path();
        };
});
