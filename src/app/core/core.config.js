(function() {
  'use strict';

  angular
    .module('gpApp.core')
    .config(toastrConfig)
    .config(configure)
    .config(x2jsHttpConfig);




  /* Configure Toastr
  –––––––––––––––––––––––––––––––––––––––––––––––––– */

  /** @ngInject */
  function toastrConfig(toastr) {


    // Configure Toastr
    // ------------------------------

    toastr.options.timeOut = 3000;
    toastr.options.positionClass = 'toast-top-left';
    toastr.options.preventDuplicates = true;
    toastr.options.progressBar = true;


  }




  /* Configure Angular & Custom Providers
  –––––––––––––––––––––––––––––––––––––––––––––––––– */

  /** @ngInject */
  function configure($logProvider, $sceDelegateProvider) {//, exceptionHandlerProvider) {


    // Enable Log
    // ------------------------------

    $logProvider.debugEnabled(true);


    // Configure common exception handler
    // ------------------------------

    //exceptionHandlerProvider.configure('[poppyGP AngularJS Error]');


    // Whitelist Embed URLs
    // ------------------------------

    $sceDelegateProvider.resourceUrlWhitelist([
      'self',
      'http://www.ustream.tv/embed/**',
      'https://www.ustream.tv/embed/**'
    ]);


  }




  /* Configure x2js provider
  –––––––––––––––––––––––––––––––––––––––––––––––––– */

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

})();
