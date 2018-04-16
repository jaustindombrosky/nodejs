require("dotenv").config();

// Add the code required to import the keys.js file and store it in a variable.
// You should then be able to access your keys information like so

// link other files

// var spotify = new Spotify(keys.spotify);
// var client = new Twitter(keys.twitter);
var dataKeys = require("./keys.js");
var fs = require('fs');
var twitter = require('twitter');
var spotify = require('spotify');
var request = require('request');

//artist name

var bandName = function(band){
    return band.name;
};

//Spotify Songs
var spotifyFind = function(song){
    if (song === undefined){
        song = 'Ace of Spades';
    };

spotify.search({
    type: 'track',
    query: song
    },
    function(err, data){
        if (err){
            console.log('Error: ' + err);
            return;
        }
    var songs = data.tracks.items;
    var data = [];
    
    for (var i = 0; i < songs.length; i++){
        data.push({
            'artist': songs[i]artist.map(bandName),
            'song name: ': songs[i].name,
            'song preview: ': songs[i].preview_url,
            'album: ': songs[i]album.name,
        });
    }
    console.log(data);
    writeTolog(data);
    });

