(function() {
  'use strict';

  angular
    .module('gpApp.content')
    .directive('gpContent', gpContentDirective);

  /* @ngInject */
  function gpContentDirective() {
    return {
      restrict: 'E',
      replace: true,
      transclude: false,
      templateUrl: 'app/content/content.html',
      controller: 'ContentController',
      controllerAs: 'content'
    };
  }

})();
