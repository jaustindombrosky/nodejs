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
            'artist': songs[i].artist.map(bandName),
            'song name: ': songs[i].name,
            'song preview: ': songs[i].preview_url,
            'album: ': songs[i].album.name,
        });
    }
    console.log(data);
    writeTolog(data);
    });
};

//twitter info and database
var showTweets = function(){
    var user = new twitter(dataKeys.twitterKeys);
    var displayed = { screen_name: 'austin_dombrosky', count: 20 };
    user.get('statuses/user_timeline', displayed, function(error, tweets, response){
        if (!error){
            var data = []; 
            for (var i =0; i < tweets.length; i++){
                data.push({
                    'shown here: ' : tweets[i].shown_here,
                    'Tweets: ' : tweets[i].text,
                });
            }
            console.log(data);
            writeToLog(data);
        }
    });
};

//movie info and database
var showMovie = function(movieName){
    if (movieName === undefined){
        movieName = 'The Return of the King';
    }
    var movieData = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=full&tomatoes=true&r=json";

}


