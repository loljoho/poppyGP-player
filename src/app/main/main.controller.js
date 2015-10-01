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

    self.toggleFullscreen = toggleFullscreen;
    self.isFullscreen = false;

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


    /* Fullscreen Controls
    –––––––––––––––––––––––––––––––––––––––––––––––––– */

    function toggleFullscreen() {
      if(!self.isFullscreen) {
        self.isFullscreen = true;
        closeSidenav();
        closeContent();
      }
      else {
        self.isFullscreen = false;
        if($mdMedia('gt-lg')) {
          openSidenav();
        }
        openContent();
      }
    }
    function closeContent() {
      $timeout(function() {
        $mdSidenav('right').close();
      }, 100);
    }
    function openContent() {
      $timeout(function() {
        $mdSidenav('right').open();
      }, 100);
    }

  }
})();
