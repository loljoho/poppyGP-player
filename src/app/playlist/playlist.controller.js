(function() {
  'use strict';

  angular
    .module('gpApp.playlist')
    .controller('PlaylistController', PlaylistController);


  /** @ngInject */
  function PlaylistController($timeout, playlistService, moment) {
    var self = this;

    self.response = {};
    self.trackList = [];
    self.startTime = moment('2015-10-10T19:29:20-05:00');
    self.currentTime = moment();
    self.currentTrack = {};

    //self.parseTrackList = parseTrackList;

    activate();

    function activate() {
      getTrackList();
    }

    /* Temporary Client-Side Playlist Parsing
    –––––––––––––––––––––––––––––––––––––––––––––––––– */


    function getTrackList() {



      playlistService.get().$promise.then(function(response) {

        var counter = moment(self.startTime);

        var trackList = [];

        var pointer = 0;

        for(var i=0; i < response.playlist.trackList.track.length; i++) {

          var trackItem = {};

          trackItem.filepath = decodeURIComponent(response.playlist.trackList.track[i].location);
          trackItem.filename = trackItem.filepath.split('\/').pop().toString();
          //trackItem.location = trackItem.filepath.split('\/').splice(-1,1).toString();
          trackItem.duration = response.playlist.trackList.track[i].duration;
          //trackItem.duration = moment.duration(response.playlist.trackList.track[i].duration, 'ms').toJSON();
          trackItem.playtime = moment(counter);
          trackItem.showtime = trackItem.playtime.format('ddd DD MMM HH:mm:ss');

          // Replace '.' with ' '
          trackItem.title = trackItem.filename.replace(/\./g, ' ');

          // Remove strings
          trackItem.title = trackItem.title.replace(/avi|mkv|mp4|x264|XviD|-asd|-joho|-jj|-Nub|DaRmEtH|English|/g, '');

          // add to trackList
          trackList.push(trackItem);
          counter.add(response.playlist.trackList.track[i].duration, 'ms');

          if(counter.isBefore()) {
            pointer = i;
          }

        } // for
        self.trackList = trackList;

        self.currentTrack = trackList[pointer];


      }, function(errorMsg) {
        self.trackList = errorMsg;

      });


    } // getTrackList


  } // PlaylistController


})();
