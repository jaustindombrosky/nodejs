require("dotenv").config();

var spotify = new Spotify(keys.spotify);
var client = new Twitter(keys.twitter);
var dataKeys = require("./keys.js");
var fs = require('fs');
var twitter = require('twitter');
var spotify = require('node-spotify-api');
var request = require('request');

var bandName = function(band){
    return band.name;
};

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
    writeToLog(data);
    });
};

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

var showMovie = function(movieName){
    if (movieName === undefined){
        movieName = 'The Return of the King';
    }
    var movieData = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=full&tomatoes=true&r=json";
    request(movieData, function(error, response, body){
        if (!error && response.statusCode == 200){
            var data = [];
            var jsonLib = JSON.parse(body);

            data.push({
                'Title: ' : jsonData.Title,
                'Year: ' : jsonData.Year,
                'Rated: ' : jsonData.Rated,
                'IMDB Rating: ' : jsonData.imdbRating,
                'Country: ' : jsonData.Country,
                'Language: ' : jsonData.Language,
                'Plot: ' : jsonData.Plot,
                'Actors: ' : jsonData.Actors,
                'Rotten Tomatoes Rating: ' : jsonData.tomatoRating,
                'Rotton Tomatoes URL: ' : jsonData.tomatoURL,  
            });
            console.log(data);
            writeToLog(data);
        }
    });
}

var request = function(){
    fs.readFile("random.txt", "utf8", function(error, data){
        console.log(data);
        writeToLog(data);
        var reqArr = data.split(',')
            if (reqArr.length == 2){
                pick(reqArr[0], reqArr[1]);
            }
            else if (reqArr.length == 1){  
            }
    });
}

var pickCase = function(caseData, functionData){
    switch (caseData){
        case 'get-my-tweets':
            showTweets();
            break;
        case 'spotify-this-song':
            spotifyFind();
            break;
        case 'movies':
            showMovie();
            break;
        case 'request':
            request();
            break;
        default:
            console.log('LIRI did not produce any results');
    }
}
var execute = function(argOne, argTwo){
    pickCase(argOne, argTwo);
};
execute(process.argv[2], process.argv[3]);
var writeToLog = function(data){
    fs.appendFile("log.txt", JSON.stringify(data), function(err){
        if(err){
            return console.log(err);
        }
        console.log("log.txt was updated");
    });
}




