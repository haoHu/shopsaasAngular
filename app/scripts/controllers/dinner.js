define(['angular'], function (angular) {
  'use strict';

  /**
   * @ngdoc function
   * @name shopSaasApp.controller:DinnerCtrl
   * @description
   * # DinnerCtrl
   * Controller of the shopSaasApp
   */
  angular.module('shopSaasApp.controllers.DinnerCtrl', [])
    .controller('DinnerCtrl', function ($scope) {
      $scope.awesomeThings = [
        'HTML5 Boilerplate',
        'AngularJS',
        'Karma'
      ];
    });
});
