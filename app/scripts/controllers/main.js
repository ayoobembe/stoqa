'use strict';

/**
 * @ngdoc function
 * @name stoqaApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the stoqaApp
 */
angular.module('stoqaApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
