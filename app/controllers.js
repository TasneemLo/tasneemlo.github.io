'use strict';

angular.module('mainApp')
  .controller('WorksCtrl',
              ['$scope', '$routeParams', 'HandleWorksFilter',
               function ($scope, $routeParams, HandleWorksFilter) {
    HandleWorksFilter.run($scope, $routeParams.filter);
  }])
  .controller('SingleWorksCtrl',
              ['$scope', '$routeParams', 'HandleWorksFilter',
               function ($scope, $routeParams, HandleWorksFilter) {
    var filterJSON = new Object();
    filterJSON[$routeParams.filterKey] = $routeParams.filterVal;
    HandleWorksFilter.run($scope, filterJSON);
  }])
  .controller('WorkCtrl',
              ['$scope', '$location', '$routeParams',
               function ($scope, $routeParams, DataStore) {
    DataStore.works.then(function(response) {
      $scope.works = response.data;
    });
    $scope.filterParam = $routeParams.filter;
    $scope.workID = $routeParams.workID;
  }]);

