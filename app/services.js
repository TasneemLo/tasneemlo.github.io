'use strict';

angular.module('mainApp')
  .service('DataStore', function($http) {
    return {
      works: $http.get('app/data/works.json')
    };
  });
