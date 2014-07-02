'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ui.router',
  'ui.bootstrap',
  'restangular',  
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers'
]).
config(['$stateProvider', '$urlRouterProvider',
function ($stateProvider,   $urlRouterProvider) {
	$stateProvider
		.state("home", {
			url: '/',
			templateUrl: 'partials/partial1.html',			
		});
}]);
