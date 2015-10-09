/* global toastr:false, moment:false */
(function() {
  'use strict';

  angular
    .module('gpApp.core')
    .constant('toastr', toastr)
    .constant('moment', moment);

})();
