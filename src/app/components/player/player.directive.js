(function() {
  'use strict';

  angular
    .module('gpApp.components')
    .directive('gpPlayer', gpPlayerDirective);

  /* @ngInject */
  function gpPlayerDirective() {
    return {
      restrict: 'E',
      replace: true,
      transclude: true,
      templateUrl: 'app/components/player/player.html',
      scope: {
        channelId : '=*?channelId',
        version   : '=*?playerVersion'
      },
      link: function(scope) {
        scope.videoSrc = 'http://www.ustream.tv/embed/' + scope.channelId + '?';
        // Use Old Player
        if(scope.version === 'old') {
          scope.videoSrc += '?v=3&amp;wmode=direct&showtitle=false';
        }
        // New HTML5 Player
        else {
          scope.videoSrc += 'html5ui=1&controls=false&showtitle=false';
        }
      }
    };
  }

})();
