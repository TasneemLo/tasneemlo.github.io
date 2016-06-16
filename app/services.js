'use strict';

angular.module('mainApp')
  .service('dataStore', ['$http', function($http) {
    return {
      works: $http.get('app/data/works.json')
    };
  }])
  .service('filterWorks',
           ['$q', '$location', 'filterFilter', 'dataStore',
            function($q, $location, filterFilter, dataStore) {
    return function(filterJSON) {
      var defer = $q.defer();
      dataStore.works.then(function(response) {
        var filterParam = {};
        try {
          var filterParam = angular.fromJson(filterJSON);
        } catch (err) {
          console.log("Did not receive a valid 'filterJSON' arg - " + err);
          $location.path("/404");
        }
        defer.resolve(filterFilter(response.data, filterParam));
      });
      return defer.promise;
    };
  }]);
