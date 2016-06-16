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
        controller: 'FilterWorkCtrl'
      })
      .when('/works/:filterKey/:filterVal', {
        templateUrl: 'app/views/works.html',
        controller: 'MultiWorkCtrl'
      })
      .when('/work/:filterKey/:filterVal', {
        templateUrl: 'app/views/work.html',
        controller: 'SingleWorkCtrl'
      })
      .when('/404', {
        templateUrl: 'app/views/404.html'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
