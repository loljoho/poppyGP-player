(function() {
  'use strict';

  angular
    .module('gpApp.playlist')
    .directive('gpPlaylist', gpPlaylistDirective);

  /* @ngInject */
  function gpPlaylistDirective() {
    return {
      restrict: 'E',
      replace: false,
      transclude: false,
      templateUrl: 'app/playlist/playlist.html',
      controller: 'PlaylistController',
      controllerAs: 'playlist'
    };
  }

})();
