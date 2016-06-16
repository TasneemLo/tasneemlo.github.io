'use strict';

angular
  .module('mainApp', ['ngRoute'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/views/home.html'
      })
      .when('/about', {
        templateUrl: 'app/views/about.html'
      })
      .when('/contact', {
        templateUrl: 'app/views/contact.html'
      })
      .when('/gallery', {
        templateUrl: 'app/views/gallery.html'
      })
      .when('/works', {
        templateUrl: 'app/views/works.html',
        controller: 'WorksCtrl'
      })
      .when('/works/:filterKey/:filterVal', {
        templateUrl: 'app/views/works.html',
        controller: 'SingleWorksCtrl'
      })
      .when('/work/:workID', {
        templateUrl: 'app/views/work.html',
        controller: 'WorkCtrl'
      })
      .when('/404', {
        templateUrl: 'app/views/404.html'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
