(function() {
  'use strict';

  angular
    .module('gpApp.content')
    .controller('ContentController', ContentController);

  /** @ngInject */
  function ContentController() {
    var self = this;


    // Sections
    // ------------------------------

    self.sectionList = [];




    /* Controller Startup Logic
    –––––––––––––––––––––––––––––––––––––––––––––––––– */

    activate();

    function activate() {
      getContentSections();
    }




    /* Content Sections and Templates
    –––––––––––––––––––––––––––––––––––––––––––––––––– */

    function getContentSections() {
      self.sectionList = [{
        name  : 'Home',
        tmpl  : 'app/content/partials/info.html'
      }, {
        name  : 'Webchat',
        tmpl  : 'app/content/partials/webchat.html'
      }, {
        name  : 'Reddit',
        tmpl  : 'app/content/partials/reddit.html'
      }, {
        name  : 'Help',
        tmpl  : 'app/content/partials/help.html'
      }];
    }

  }


})();
