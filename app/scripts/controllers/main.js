define(['angular'], function (angular) {
  'use strict';

  /**
   * @ngdoc function
   * @name shopSaasApp.controller:MainCtrl
   * @description
   * # MainCtrl
   * Controller of the shopSaasApp
   */
  angular.module('shopSaasApp.controllers.MainCtrl', [])
    .controller('MainCtrl', function ($scope) {
      $scope.awesomeThings = [
        'HTML5 Boilerplate',
        'AngularJS',
        'Karma'
      ];
    });
});
