'use strict';

angular.module('mainApp')
  .controller('FilterWorkCtrl',
              ['$scope', '$routeParams', 'filterWorks',
               function ($scope, $routeParams, filterWorks) {
    filterWorks($routeParams.filter).then(function(data) {
      $scope.works = data;
    });
  }])
  .controller('MultiWorkCtrl',
              ['$scope', '$routeParams', 'filterWorks',
               function ($scope, $routeParams, filterWorks) {
    var filterJSON = new Object();
    filterJSON[$routeParams.filterKey] = $routeParams.filterVal;
    filterWorks(filterJSON).then(function(data) {
      $scope.works = data;
    });
  }])
  .controller('SingleWorkCtrl',
              ['$scope', '$location', '$routeParams', 'filterWorks',
               function ($scope, $location, $routeParams, filterWorks) {
    var filterJSON = new Object();
    filterJSON[$routeParams.filterKey] = $routeParams.filterVal;
    filterWorks(filterJSON).then(function(data) {
      if (data.length > 1) {
        console.log('Found more than 1 result matching the given filter - ' +
                    JSON.stringify(filterJSON));
        $location.path('/404');
      } else if (data.length == 0) {
        console.log('Found no results matching the given filter - ' +
                    JSON.stringify(filterJSON));
        $location.path('/404');
      }
      $scope.work = data[0];
    });
  }]);
