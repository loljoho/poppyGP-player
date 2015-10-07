(function() {
  'use strict';

  angular
    .module('gpApp')
    .directive('gpPlaylist', gpPlaylistDirective);

  /* @ngInject */
  function gpPlaylistDirective() {
    return {
      restrict: 'E',
      replace: false,
      transclude: false,
      templateUrl: 'app/components/playlist/playlist.html',
      controller: 'PlaylistController',
      controllerAs: 'playlist'
    };
  }

})();
