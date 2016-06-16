'use strict';

angular.module('mainApp')
  .controller('WorksCtrl', function ($scope, $location, $routeParams,
                                     DataStore) {
    DataStore.works.then(function(response) {
      $scope.works = response.data;
    });
    try {
      $scope.filterParam = angular.fromJson($routeParams.filter);
    } catch (err) {
      console.log("Did not receive a valid 'filter' routeParam - " + err);
      $location.path("/404");
    }
  })
  .controller('WorkCtrl', function ($scope, $routeParams, DataStore) {
    DataStore.works.then(function(response) {
      $scope.works = response.data;
    });
    $scope.filterParam = $routeParams.filter;
    $scope.workID = $routeParams.workID;
  });

