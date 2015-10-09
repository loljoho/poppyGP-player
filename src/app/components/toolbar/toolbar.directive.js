(function() {
  'use strict';

  angular
    .module('gpApp.components')
    .directive('gpToolbar', gpToolbarDirective);

  /* @ngInject */
  function gpToolbarDirective() {
    return {
      restrict: 'E',
      replace: false,
      transclude: true,
      templateUrl: 'app/components/toolbar/toolbar.html'
    };
  }

})();
