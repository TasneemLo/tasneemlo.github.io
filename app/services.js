'use strict';

angular.module('mainApp')
  .service('DataStore', ['$http', function($http) {
    return {
      works: $http.get('app/data/works.json')
    };
  }])
  .service('HandleWorksFilter',
           ['$location', 'DataStore',
            function($location, DataStore) {
    this.run = function($scope, filterJSON) {
      DataStore.works.then(function(response) {
        $scope.works = response.data;
      });
      try {
        $scope.filterParam = angular.fromJson(filterJSON);
      } catch (err) {
        console.log("Did not receive a valid 'filter' routeParam - " + err);
        $location.path("/404");
      }
    }
  }]);
