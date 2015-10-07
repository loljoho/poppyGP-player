(function() {
  'use strict';

  angular
    .module('gpApp')
    .factory('playlistService', playlistServiceFactory);

  /** @ngInject */
  function playlistServiceFactory($resource) {

    var url = './data/playlist.xspf';
    var resource = $resource(url);

    return resource;
  }

})();
