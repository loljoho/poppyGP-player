(function() {
  'use strict';

  angular
    .module('gpApp')
    .directive('gpSidebar', gpSidebarDirective);

  /* @ngInject */
  function gpSidebarDirective() {
    return {
      restrict: 'E',
      transclude: true
    };
  }

})();
