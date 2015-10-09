poppyGP-player
==============



> Platform-agnostic community-centered video channel AngularJS single-page web application by Joho (Jonathan Ho)




Overview
--------

__poppyGP-player__ is a single-page web application for an embedded  RTMP video stream `iframe` and utilises the technologies listed below

 - __AngularJS__ Javascript MV* Framework with __Angular-Material__
 - __Node.js__ runtime environment with __npm__ for management of development tools
 - __Bower__ front-end dependency manager
 - __Yeoman__ scaffolding generator
 - __Gulp.js__ build task automation
 - __HTML5__ markup
 - __CSS3__ stylesheets compiled from __Sass/Scss__
 - __KiwIRC__ embedded webchat

Development is centered around the (new) HTML5 video player by UStream




Objectives
----------

Below is an outline of the objectives for which _poppyGP-player__ will be developed

 - __Responsive, Cross-Platform/Browser__ - mobile-friendly flexbox-based layout without graceful degradation; minimum browser support as follows: 
   - Google Chrome 40
   - Internet Explorer 10
   - Mozilla Firefox 38
   - Safari 8
   - Opera 32
   - iOS Safari 8.4
   - Opera Mini 5.0-8.0
   - Android Browser 4.4
   - Chrome for Android 45
 - __REST API Integration__ - features implementation of the APIs listed below
   - Ergast Developer API - experimental web service for Grand Prix Racing statistics
   - Reddit - authentication 
   - Twitter - authentication and stream updates
   - Facebook(?) - authentication
   - PayPal - payment for donations
   - Mycelium Gear - payment for donations
   - Stripe(?) - payment for donations
 - __Google Analytics__




Application
-----------

The AngularJS application was scaffolded using the [Gulp-Angular](https://github.com/Swiip/generator-gulp-angular) Yeoman generator, and its structure is based on concepts outlined in [@john_papa's Style Guide](https://github.com/johnpapa/angular-styleguide#application-structure).

__Application Structure__

```
src/
├── app/
│   │
│   ├── core/                         --> CORE MODULE
│   │   ├── core.module.js
│   │   ├── core.config.js
│   │   ├── core.constants.js
│   │   └── core.run.js
│   │
│   ├── common/                       --> SHARED MODULES
│   │   ├── exception/                --> Exception Handler
│   │   └── logger/                   --> Logging Service
│   │
│   ├── components/                   --> COMPONENTS MODULE
│   │   ├── brand/
│   │   ├── player/
│   │   ├── toolbar/
│   │   └── components.module.js
│   │
│   ├── main/                         --> MAIN APPLICATION MODULE
│   │   ├── main.controller.js
│   │   ├── main.html
│   │   └── main.module.js
│   │
│   ├── content/                      --> CONTENT FEATURE MODULE
│   │   ├── partials/
│   │   │   ├── info.html
│   │   │   ├── chat.html
│   │   │   ├── reddit.html
│   │   │   └── help.html
│   │   ├── content.controller.js
│   │   ├── content.directive.js
│   │   ├── content.html
│   │   ├── content.scss
│   │   └── content.module.js
│   │
│   ├── playlist/                     --> PLAYLIST FEATURE MODULE
│   │   ├── playlist.controller.js
│   │   ├── playlist.directive.js
│   │   ├── playlist.filter.js
│   │   ├── playlist.service.js
│   │   └── playlist.module.js
│   │
│   ├── index.module.js               --> Module Index
│   └── index.scss                    --> Stylesheet Index
│   
├── assets/
│   ├── data/                         --> Data Files
│   ├── icons/                        --> SVG Icons
│   ├── images/                       --> PNG/JPG/GIF
│   └── touch/                        --> Mobile/Touch Icons
│   
├── apple-touch-icon.png
├── favicon.ico
├── favicon-16x16.png
├── favicon-32x32.png
├── favicon-96x96.png
└── index.html
```



Contributing
------------

Send me an e-mail or message--you'll probably be the first person to inquire ;)




Miscellanous
------------

 - [ ] [`md-virtual-repeat`](https://material.angularjs.org/0.11.0/#/demo/material.components.virtualRepeat) for schedule component in `md-sidenav.md-sidenav-left`
 - [ ] `md-swipe` to toggle side content nav/bar
 - [ ] `md-tab-label > md-icon`, only show icon tabs on smaller viewports
 - [ ] `md-icon-button` for donations, etc. with `$mdDialog`
   - [ ] PayPal
   - [ ] Stripe
   - [ ] Mycelium
 - [ ] Miscellaneous features