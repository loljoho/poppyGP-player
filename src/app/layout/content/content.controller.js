(function() {
  'use strict';

  angular
    .module('gpApp')
    .controller('ContentController', ContentController);

  /** @ngInject */
  function ContentController() {
    var vm = this;

    vm.contentTabs = [];

    activate();

    function activate() {
      getContentTabs();
    }

    function getContentTabs() {
      vm.contentTabs = [{
        label   : 'Info',
        icon    : 'info',
        content : 'app/content/info.html'
      }, {
        label   : 'Chat',
        icon    : 'forum',
        content : 'app/content/webchat.html'
      }, {
        label   : 'Reddit',
        icon    : 'reddit',
        content : 'app/content/reddit.html'
      }];
    }


  }
})();
