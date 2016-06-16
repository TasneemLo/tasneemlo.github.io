'use strict';

angular.module('mainApp')
  .controller('NavBarCtrl', ['$scope', function($scope) {
    $scope.isCollapsed = true;
  }])
  .controller('ErrorCtrl',
              ['$scope', '$rootScope', function($scope, $rootScope) {
    $scope.errorMsg = $rootScope.errorMsg;
    $rootScope.errorMsg = undefined;
  }])
  .controller('FilterWorkCtrl',
              ['$scope', '$routeParams', 'filterWorks',
               function ($scope, $routeParams, filterWorks) {
    filterWorks($routeParams.filter).then(function(data) {
      $scope.works = data;
    });
  }])
  .controller('MultiWorkCtrl',
              ['$scope', '$location', '$routeParams', '$rootScope',
               'filterWorks',
               function ($scope, $location, $routeParams, $rootScope,
                         filterWorks) {
    var filterJSON = new Object();
    filterJSON[$routeParams.filterKey] = $routeParams.filterVal;
    filterWorks(filterJSON).then(function(data) {
      if (data.length == 0) {
        console.log('Found no results matching the given filter - ' +
                    JSON.stringify(filterJSON));
        $rootScope.errorMsg = "<strong>Error:</strong> There were no art " +
          "works matching the criteria given. Possibly the URL you have is " +
          "wrong or maybe the art works were removed.";
        $location.path('/error');
      }
      $scope.works = data;
    });
  }])
  .controller('SingleWorkCtrl',
              ['$scope', '$location', '$routeParams', '$rootScope',
               'filterWorks',
               function ($scope, $location, $routeParams, $rootScope,
                         filterWorks) {
    var filterJSON = new Object();
    filterJSON[$routeParams.filterKey] = $routeParams.filterVal;
    filterWorks(filterJSON).then(function(data) {
      if (data.length > 1) {
        console.log('Found more than 1 result matching the given filter - ' +
                    JSON.stringify(filterJSON));
        $rootScope.errorMsg = "<strong>Error:</strong> There were more than " +
          "one works which matched the item you are searching for. This is " +
          "definitely a bug on our side, let us know about it with details " +
          "on how to reproduce this!";
        $location.path('/error');
      } else if (data.length == 0) {
        console.log('Found no results matching the given filter - ' +
                    JSON.stringify(filterJSON));
        $rootScope.errorMsg = "<strong>Error:</strong> The art work you are " +
          "looking for was not found. Possibly the URL you have is wrong or " +
          "maybe the art work was removed.";
        $location.path('/error');
      }
      $scope.work = data[0];
    });
  }]);
