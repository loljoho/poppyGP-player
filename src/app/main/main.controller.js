(function() {
  'use strict';

  angular
    .module('gpApp')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($timeout, $mdMedia, $mdSidenav) {
    var self = this;

    self.toggleSidenav = toggleSidenav;
    self.sidenavIsOpen = false;

    self.toggleContent = toggleContent;
    self.contentIsOpen = true;

    self.activeSection = 0;

    activate();

    function activate() {
      self.sidenavIsOpen = $mdMedia('gt-lg') ? true : false;
    }


    /* Sidenav Controls
    –––––––––––––––––––––––––––––––––––––––––––––––––– */

    function toggleSidenav() {
      $timeout(function() {
        self.sidenavIsOpen = !self.sidenavIsOpen;
        $mdSidenav('right').toggle();
      }, 100);
    }
    function closeSidenav() {
      if(self.sidenavIsOpen) {
        $timeout(function() {
          self.sidenavIsOpen = false;
          $mdSidenav('right').close();
        }, 100);
      }
    }
    function openSidenav() {
      if(!self.sidenavIsOpen) {
        $timeout(function() {
          self.sidenavIsOpen = true;
          $mdSidenav('right').open();
        }, 100);
      }
    }


    /* Content Controls
    –––––––––––––––––––––––––––––––––––––––––––––––––– */

    function toggleContent() {
      if(!self.contentIsOpen) {
        self.contentIsOpen = true;
        closeContent();
      }
      else {
        self.contentIsOpen = false;
        openContent();
      }
    }
    function closeContent() {
      $timeout(function() {
        $mdSidenav('left').close();
      }, 100);
    }
    function openContent() {
      $timeout(function() {
        $mdSidenav('left').open();
      }, 100);
    }

  }
})();
