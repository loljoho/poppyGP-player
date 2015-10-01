(function() {
  'use strict';

  angular
    .module('gpApp')
    .factory('playlistService', playlistServiceFactory);

  /** @ngInject */
  function playlistServiceFactory($resource, $log) {

    var url = './data/playlist.xspf';
    var resource = $resource(url);

    $log.info('Resource: ' + url);

    return resource;
  }

})();
