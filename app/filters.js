'use strict';

angular.module('mainApp')
  .filter('trustedHTML', ['$sce', function($sce){
    return function(text) {
      return $sce.trustAsHtml(text);
    };
  }]);
