(function() {
  'use strict';

  angular
    .module('gpApp.playlist')
    .filter('isPast', isPast);


  /** @ngInject */
  function isPast(moment) {
    return function(items) {
      return items.filter(function(item) {
        return moment(item.playtime).isAfter();
      });
    };
  }


})();
