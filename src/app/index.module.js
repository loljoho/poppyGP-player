(function() {
  'use strict';

  angular
    .module('gpApp', [


      // Shared Modules
      // ------------------------------

      'gpApp.core',
      'gpApp.components',


      // Feature Modules
      // ------------------------------

      'gpApp.main',
      'gpApp.content',
      'gpApp.playlist'

      
    ]);

})();
