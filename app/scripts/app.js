/*jshint unused: vars */
define(['angular', 'controllers/main', 'controllers/about', 'controllers/signup', 'controllers/signin', 'controllers/recorder', 'controllers/dinner', 'controllers/order']/*deps*/, function (angular, MainCtrl, AboutCtrl, SignupCtrl, SigninCtrl, RecorderCtrl, DinnerCtrl, OrderCtrl)/*invoke*/ {
  'use strict';

  /**
   * @ngdoc overview
   * @name shopSaasApp
   * @description
   * # shopSaasApp
   *
   * Main module of the application.
   */
  return angular
    .module('shopSaasApp', ['shopSaasApp.controllers.MainCtrl',
'shopSaasApp.controllers.AboutCtrl',
'shopSaasApp.controllers.SignupCtrl',
'shopSaasApp.controllers.SigninCtrl',
'shopSaasApp.controllers.RecorderCtrl',
'shopSaasApp.controllers.DinnerCtrl',
'shopSaasApp.controllers.OrderCtrl',
/*angJSDeps*/
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'ngAnimate',
    'ngTouch'
  ])
    .config(function ($routeProvider) {
      $routeProvider
        .when('/', {
          templateUrl: 'views/main.html',
          controller: 'MainCtrl'
        })
        .when('/about', {
          templateUrl: 'views/about.html',
          controller: 'AboutCtrl'
        })
        .when('/signup', {
          templateUrl: 'views/signup.html',
          controller: 'SignupCtrl'
        })
        .when('/signin', {
          templateUrl: 'views/signin.html',
          controller: 'SigninCtrl'
        })
        .when('/recorder', {
          templateUrl: 'views/recorder.html',
          controller: 'RecorderCtrl'
        })
        .when('/dinner', {
          templateUrl: 'views/dinner.html',
          controller: 'DinnerCtrl'
        })
        .when('/order', {
          templateUrl: 'views/order.html',
          controller: 'OrderCtrl'
        })
        .otherwise({
          redirectTo: '/'
        });
    });
});
