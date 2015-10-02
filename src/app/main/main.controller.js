(function() {
  'use strict';

  angular
    .module('gpApp')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($timeout, $mdMedia, $mdSidenav) {
    var self = this;

    self.toggleSection = toggleSection;
    self.activeSection = 0;

    self.toggleSidenav = toggleSidenav;
    self.sidenavIsOpen = false;

    self.toggleContent = toggleContent;
    self.contentIsOpen = true;

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

      // open content panel if closed
      if(!self.contentIsOpen) {
        openContent();
      }
      // close content panel if open && same section
      else if(self.contentIsOpen && previous === section) {
        closeContent();
      }
    }


    /* Sidenav Controls
    –––––––––––––––––––––––––––––––––––––––––––––––––– */

    function toggleSidenav() {
      if(self.sidenavIsOpen) {
        closeSidenav();
        self.sidenavIsOpen = false;
      }
      else {
        openSidenav();
        self.sidenavIsOpen = true;
      }
    }
    function closeSidenav() {
      $timeout(function() {
        $mdSidenav('right').close();
      }, 100);

    }
    function openSidenav() {
      $timeout(function() {
        $mdSidenav('right').open();
      }, 100);
    }


    /* Content Controls
    –––––––––––––––––––––––––––––––––––––––––––––––––– */

    function toggleContent() {
      if(self.contentIsOpen) {
        closeContent();
      }
      else {
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

  }
})();
