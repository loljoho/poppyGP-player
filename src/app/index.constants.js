/* global toastr:false, moment:false */
(function() {
  'use strict';

  angular
    .module('gpApp')
    .constant('toastr', toastr)
    .constant('moment', moment);

})();
