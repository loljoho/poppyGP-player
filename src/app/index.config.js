(function() {
  'use strict';

  angular
    .module('gpApp')
    .config(ngProviderConfig)
    .config(ngMaterialConfig)
    .config(x2jsHttpConfig);

  /** @ngInject */
  function ngProviderConfig($logProvider, $sceDelegateProvider, toastr) {

    // Enable log
    $logProvider.debugEnabled(true);

    // Whitelist Embed URLs
    $sceDelegateProvider.resourceUrlWhitelist([
      'self',
      'http://www.ustream.tv/embed/**',
      'https://www.ustream.tv/embed/**'
    ]);

    // Set options third-party lib
    toastr.options.timeOut = 3000;
    toastr.options.positionClass = 'toast-top-right';
    toastr.options.preventDuplicates = true;
    toastr.options.progressBar = true;
  }

  /** @ngInject */
  function x2jsHttpConfig($httpProvider, x2jsProvider) {

    x2jsProvider.config = {
      // escapeMode               : true|false - Escaping XML characters. Default is true from v1.1.0+
      // attributePrefix          : "<string>" - Prefix for XML attributes in JSon model. Default is "_"
      // arrayAccessForm          : "none"|"property" - The array access form (none|property). Use this property if you want X2JS generates an additional property <element>_asArray to access in array form for any XML element. Default is none from v1.1.0+
      // emptyNodeForm            : "text"|"object" - Handling empty nodes (text|object) mode. When X2JS found empty node like <test></test> it will be transformed to test : '' for 'text' mode, or to Object for 'object' mode. Default is 'text'
      // enableToStringFunc       : true|false - Enable/disable an auxiliary function in generated JSON objects to print text nodes with text/cdata. Default is true
      // arrayAccessFormPaths     : [] - Array access paths. Use this option to configure paths to XML elements always in "array form". You can configure beforehand paths to all your array elements based on XSD or your knowledge. Every path could be a simple string (like 'parent.child1.child2'), a regex (like /.*\.child2/), or a custom function. Default is empty
      // skipEmptyTextNodesForObj : true|false - Skip empty text tags for nodes with children. Default is true.
      // stripWhitespaces         : true|false - Strip whitespaces (trimming text nodes). Default is true.
      // datetimeAccessFormPaths  : [] - Datetime access paths. Use this option to configure paths to XML elements for "datetime form". You can configure beforehand paths to all your array elements based on XSD or your knowledge. Every path could be a simple string (like 'parent.child1.child2'), a regex (like /.*\.child2/), or a custom function. Default is empty
    };

    $httpProvider.interceptors.push('xmlHttpInterceptor');


  }

  /** @ngInject */
  function ngMaterialConfig($mdIconProvider) {
    $mdIconProvider
      .icon('announce',     './assets/icons/announce.svg')
      .icon('arrow-left',	  './assets/icons/arrow-left.svg')
      .icon('arrow-right',  './assets/icons/arrow-right.svg')
      .icon('bitcoin',      './assets/icons/bitcoin.svg')
      .icon('close',        './assets/icons/close.svg')
      .icon('menu',         './assets/icons/menu.svg')
      .icon('paypal',       './assets/icons/paypal.svg')
      .icon('people',       './assets/icons/people.svg')
      .icon('reddit',       './assets/icons/reddit.svg')
      .icon('settings',	  	'./assets/icons/settings.svg')
      .icon('twitter',	  	'./assets/icons/twitter.svg');
  }

})();
