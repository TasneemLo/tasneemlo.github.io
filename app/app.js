'use strict';

angular
  .module('mainApp', ['ngRoute'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/views/home.html',
        controller: 'HomeCtrl'
      })
      .when('/about', {
        templateUrl: 'app/views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/contact', {
        templateUrl: 'app/views/contact.html',
        controller: 'ContactCtrl'
      })
      .when('/gallery', {
        templateUrl: 'app/views/gallery.html',
        controller: 'GalleryCtrl'
      })
      .when('/works', {
        templateUrl: 'app/views/works.html',
        controller: 'WorksCtrl'
      })
      .when('/work/:workID', {
        templateUrl: 'app/views/work.html',
        controller: 'WorkCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
