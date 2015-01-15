'use strict';

/**
 * @ngdoc function
 * @name stoqaApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the stoqaApp
 */
angular.module('stoqaApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
