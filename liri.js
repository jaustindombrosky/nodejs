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
    });


