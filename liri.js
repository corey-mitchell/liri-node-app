// Reads and sets any environment variables with the dotenv package
require("dotenv").config();

// Allows File Reading and Writing
const fs = require("fs");

// Imports keys.js
const keys = require("./keys.js");
// import {spotify} from "./keys.js";  <=== ES6 Version uses import, not currently supported by node. Just something I learned that I am leaving in the code for later use.

// Initializes APIs
const spotifyAPI = require('node-spotify-api');
const twitterAPI = require('twitter');
const omdbAPI = require("omdb-client");

// Defines command so that I don't have to type process.argv[2] all day
const command = process.argv[2];

// Function for defining 'movie-this' command
const movieThis = (title='Mr. Nobody') => {
    // Logs command in log.txt
    fs.appendFile('log.txt', 'User Command: node liri movie-this\n\n', (err) => {
        if(err) {
            return console.log(err);
        };
    });

    // setting parameter var
    const params = {
        apiKey: process.env.OMDB_KEY,
        title: title
    };

    // calling api
    omdbAPI.get(params, (err, movies) => {
        if (err) {
            return console.log(err);
        };

        // setting var for response text
        const response = `Title: ${movies.Title}\nYear: ${movies.Year}\nIMDb Rating: ${movies.imdbRating}/10\nCountry Created: ${movies.Country}\nLaunguage: ${movies.Language}\nActors: ${movies.Actors}\nPlot: ${movies.Plot}`

        // console.logs Out Movie Info
        console.log(response);

        // Logs responses in log.txt
        fs.appendFile('log.txt', `${response}\n\n\n`, (err) => {
            if(err) {
                return console.log(err);
            };
        });
    });
};

// Function for defining 'spotify-this-song' command
// Use format 'song, artist' to help find more specific tracks. If you pass just the song title the response will be top spotify track by that name.
// If the artist is not on spotify then your response will not be what you expect. Example the band 'Tool'
const spotifyThis = (song='The Sign, Ace of Base') => {
    // logs user command
    fs.appendFile('log.txt', 'User Command: node liri spotify-this-song\n\n', (err) => {
        if(err) {
            return console.log(err);
        };
    });

    // creates api request and passes thru keys
    const spotify = new spotifyAPI(keys.spotify);

    // calling api
    spotify.search({type: 'track', query: song, limit: 5}, (err, data) => {
        if (err) {
            return console.log(err);
        };

        // targets desired track info
        const songInfo = data.tracks.items[0];

        // holds response info
        const response = `Artist: ${songInfo.artists[0].name}\nSong: ${songInfo.name}\nLink to song: ${songInfo.external_urls.spotify}\nAlbum: ${songInfo.album.name}`;
        
        // console.logs out song info;
        console.log(response);

        // Logs responses in log.txt
        fs.appendFile('log.txt', `${response}\n\n\n`, (err) => {
            if(err) {
                return console.log(err);
            };
        });
    });
};

// Function for defining 'my-tweets' command
const myTweets = () => {
    // logs user command
    fs.appendFile('log.txt', 'User Command: node liri my-tweets\n\n', (err) => {
        if(err) {
            return console.log(err);
        };
    });

    // creates api request and passes thru keys
    const client = new twitterAPI(keys.twitter);

    // sets api parameters
    const params = {screen_name: 'BiffMacaroni', count: 20};

    // calling api
    client.get('statuses/user_timeline', params, (err, tweets) => {
        if (err) {
            console.log(err);
        };

        let response = ''
        // Loop for iterating over tweets
        for (let i = 0; i < tweets.length; i++) {
            response += `${tweets[i].text}\n===================================\n`
            console.log(response);
        };

        // Logs responses in log.txt
        fs.appendFile('log.txt', `${response}\n\n`, (err) => {
            if(err) {
                return console.log(err);
            };
        });
    });
};

// Function for defining 'do-what-it-says' command
const textCommand = () => {
    // Logs user command
    fs.appendFile('log.txt', 'User Command: node liri do-what-it-says\n', (err) => {
        if(err) {
            return console.log(err);
        };
    });

    // reads text from random.txt
    fs.readFile('random.txt', 'utf8', (err, data) => {
        if (err) {
            return console.log(err);
        }
        // separates the command from the input and puts them in an array
        const dataArr = data.split(",")

        // defines the dataArr objects as variables for a conditional
        const command = dataArr[0]
        const input = dataArr[1]

        // conditional for reading command and deciding what to do with it.
        if(command === 'my-tweets') {
            return myTweets();
        }else if (command === 'spotify-this-song') {
            return spotifyThis(input);
        }else {
            return movieThis(input);
        };
    });
};

// movie-this command
if(command === "movie-this") {
    movieThis(process.argv[3]);
}

// my-tweets command
else if(command === "my-tweets") {
    myTweets();
}

// spotify-this-song command
// Use format 'song, artist' to help find more specific tracks. If you pass just the song title the response will be top spotify track by that name.
else if(command === "spotify-this-song") {
    spotifyThis(process.argv[3]);
}

// do-what-it-says command
else if (command === "do-what-it-says") {
    textCommand();
}

// handles missing or invalid commands
else {
    console.log("Missing or invalid command");
};