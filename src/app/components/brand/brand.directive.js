(function() {
  'use strict';

  angular
    .module('gpApp')
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
