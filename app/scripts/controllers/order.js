define(['angular'], function (angular) {
  'use strict';

  /**
   * @ngdoc function
   * @name shopSaasApp.controller:OrderCtrl
   * @description
   * # OrderCtrl
   * Controller of the shopSaasApp
   */
  angular.module('shopSaasApp.controllers.OrderCtrl', [])
    .controller('OrderCtrl', function ($scope) {
      $scope.awesomeThings = [
        'HTML5 Boilerplate',
        'AngularJS',
        'Karma'
      ];
    });
});
