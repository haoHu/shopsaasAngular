define(['angular'], function (angular) {
  'use strict';

  /**
   * @ngdoc function
   * @name shopSaasApp.controller:SigninCtrl
   * @description
   * # SigninCtrl
   * Controller of the shopSaasApp
   */
  angular.module('shopSaasApp.controllers.SigninCtrl', [])
    .controller('SigninCtrl', function ($scope) {
      $scope.awesomeThings = [
        'HTML5 Boilerplate',
        'AngularJS',
        'Karma'
      ];
    });
});
