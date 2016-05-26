'use strict';

angular.module('mainApp')
  .controller('HomeCtrl', function ($scope) {
  })
  .controller('AboutCtrl', function ($scope) {
  })
  .controller('ContactCtrl', function ($scope) {
  })
  .controller('GalleryCtrl', function ($scope) {
  })
  .controller('WorksCtrl', function ($scope, $routeParams, DataStore) {
    DataStore.works.then(function(response) {
      $scope.works = response.data;
    });
    $scope.filterParam = angular.fromJson($routeParams.filter);
  })
  .controller('WorkCtrl', function ($scope, $routeParams, DataStore) {
    DataStore.works.then(function(response) {
      $scope.works = response.data;
    });
    $scope.filterParam = $routeParams.filter;
    $scope.workID = $routeParams.workID;
  });

