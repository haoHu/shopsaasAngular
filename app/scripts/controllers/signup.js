define(['angular'], function (angular) {
  'use strict';

  /**
   * @ngdoc function
   * @name shopSaasApp.controller:SignupCtrl
   * @description
   * # SignupCtrl
   * Controller of the shopSaasApp
   */
  angular.module('shopSaasApp.controllers.SignupCtrl', [])
    .controller('SignupCtrl', function ($scope) {
      $scope.awesomeThings = [
        'HTML5 Boilerplate',
        'AngularJS',
        'Karma'
      ];
    });
});
