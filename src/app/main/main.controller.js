(function() {
  'use strict';

  angular
    .module('gpApp.main')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($log, $timeout, $mdMedia, $mdSidenav) {
    var self = this;


    // Content Section
    // ------------------------------

    self.toggleSection    = toggleSection;
    self.activeSection    = 0;


    // Playlist Sidenav
    // ------------------------------

    self.toggleSidenav    = toggleSidenav;
    self.sidenavIsOpen    = false;


    // Content Panel
    // ------------------------------

    self.toggleContent    = toggleContent;
    self.contentIsOpen    = true;


    // Fullscreen
    // ------------------------------

    self.toggleFullscreen = toggleFullscreen;
    self.isFullscreen     = false;




    /* Controller Startup Logic
    –––––––––––––––––––––––––––––––––––––––––––––––––– */

    activate();

    function activate() {
      self.sidenavIsOpen = $mdMedia('gt-lg') ? true : false;
    }




    /* Content Section Toggle
    –––––––––––––––––––––––––––––––––––––––––––––––––– */

    function toggleSection(section) {
      var previous = self.activeSection;

      // set new section
      self.activeSection  = section;

      // close content panel if open && same section
      if(self.contentIsOpen && previous === section) {
        $log.info('Close content panel');
        closeContent();
      }
      // open content panel if closed
      else if(!self.contentIsOpen || !$mdSidenav('left').isOpen()) {
        $log.info('Open content panel');
        openContent();
      }
    }




    /* Content Controls
    –––––––––––––––––––––––––––––––––––––––––––––––––– */

    function toggleContent() {
      if(self.contentIsOpen) {
        closeContent();
      } else {
        openContent();
      }
    }
    function closeContent() {
      self.contentIsOpen = false;
      $timeout(function() {
        $mdSidenav('left').close();
      }, 100);
    }
    function openContent() {
      self.contentIsOpen = true;
      $timeout(function() {
        $mdSidenav('left').open();
      }, 100);
    }




    /* Sidenav Controls
    –––––––––––––––––––––––––––––––––––––––––––––––––– */

    function toggleSidenav() {
      if(self.sidenavIsOpen) {
        closeSidenav();
      } else {
        openSidenav();
      }
    }
    function closeSidenav() {
      self.sidenavIsOpen = false;
      $timeout(function() {
        $mdSidenav('right').close();
      }, 100);
    }
    function openSidenav() {
      self.sidenavIsOpen = true;
      $timeout(function() {
        $mdSidenav('right').open();
      }, 100);
    }




    /* Toggle Fullscreen
    –––––––––––––––––––––––––––––––––––––––––––––––––– */

    function toggleFullscreen() {
      if(!self.isFullscreen) {
        closeSidenav();
        closeContent();
      }
      $timeout(function() {
        self.isFullscreen = !self.isFullscreen;
      }, 200);
    }




  }
})();
