(function() {
  'use strict';

  angular
    .module('gpApp')
    .controller('SidebarController', SidebarController);

  /* @ngInject */
  function SidebarController() {
    var self = this;

    self.activeSection  = 0;
    self.openSection    = openSection;

    activate();

    function activate() {
      self.sectionList = [{
        'name': 'Home',
        'tmpl': 'info.html',
        'open': true
      }, {
        'name': 'Webchat',
        'tmpl': 'webchat.html',
        'open': false
      }, {
        'name': 'PayPal',
        'tmpl': 'paypal.html',
        'open': false
      }, {
        'name': 'Bitcoin',
        'tmpl': 'bitcoin.html',
        'open': false
      }, {
        'name': 'Reddit',
        'tmpl': 'reddit.html',
        'open': false
      }];
    }

  }

})();
