define(['angular'], function (angular) {
  'use strict';

  /**
   * @ngdoc function
   * @name shopSaasApp.controller:RecorderCtrl
   * @description
   * # RecorderCtrl
   * Controller of the shopSaasApp
   */
  angular.module('shopSaasApp.controllers.RecorderCtrl', [])
    .controller('RecorderCtrl', function ($scope) {
      $scope.awesomeThings = [
        'HTML5 Boilerplate',
        'AngularJS',
        'Karma'
      ];
    });
});
