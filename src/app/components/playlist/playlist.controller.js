(function() {
  'use strict';

  angular
    .module('gpApp')
    .controller('PlaylistController', PlaylistController);


  /** @ngInject */
  function PlaylistController($log, $timeout, playlistService, moment) {
    var self = this;

    self.response = {};
    self.trackList = [];
    self.startTime = moment('2015-10-07T14:22:00-05:00');
    self.currentTime = moment();

    //self.parseTrackList = parseTrackList;

    activate();

    function activate() {
      getTrackList();
    }

    /* Temporary Client-Side Playlist Parser
    –––––––––––––––––––––––––––––––––––––––––––––––––– */
    function getTrackList() {



      // $resource.get
      playlistService.get().$promise.then(function(response) {

        var counter = moment(self.startTime);

        var trackList = [];

        $log.info(response.playlist.trackList.track.length);


        for(var i=0; i < response.playlist.trackList.track.length; i++) {

          var trackItem = {};

          trackItem.filepath = decodeURIComponent(response.playlist.trackList.track[i].location);
          trackItem.filename = trackItem.filepath.split('\/').pop().toString();
          //trackItem.location = trackItem.filepath.split('\/').splice(-1,1).toString();
          trackItem.duration = response.playlist.trackList.track[i].duration;
          //trackItem.duration = moment.duration(response.playlist.trackList.track[i].duration, 'ms').toJSON();
          trackItem.playtime = counter;
          trackItem.showtime = trackItem.playtime.format('ddd DD MMM HH:mm:ss');

          //if(response.playlist.trackList.track[i].title) {
            //trackItem.title = response.playlist.trackList.track[i].title;
          //} else {
            trackItem.title = trackItem.filename.replace(/\./g, ' ');
          //}

          // add to trackList
          trackList.push(trackItem);
          counter.add(response.playlist.trackList.track[i].duration, 'ms');

        } // for
        self.trackList = trackList;


      }, function(errorMsg) {
        self.trackList = errorMsg;

      });


    } // getTrackList


  } // PlaylistController


})();
