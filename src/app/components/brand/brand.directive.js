(function() {
  'use strict';

  angular
    .module('gpApp.components')
    .directive('gpBrand', gpBrandDirective);

  /** @ngInject */
  function gpBrandDirective() {
    var directive = {
      restrict: 'E',
      replace: true,
      transclude: false,
      templateUrl: 'app/components/brand/brand.html'
    };

    return directive;

  }

})();
