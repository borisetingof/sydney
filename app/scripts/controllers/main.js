'use strict';

/**
 * @ngdoc function
 * @name sydneyApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sydneyApp
 */
angular.module('sydneyApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
