// Reads and sets any environment variables with the dotenv package
require("dotenv").config();

// Imports keys.js
const keys = require("./keys.js");
// import {spotify} from "./keys.js";  <=== ES6 Version uses import, not currently supported by node. Just something I learned that I am leaving in the code for later use.

const Spotify = require('node-spotify-api');

// Other Var ***Need to set up***
// let fs = require("fs");
// let twitter = new Twitter(keys.twitter);


// Defines command so that I don't have to type process.argv[2] all day
let command = process.argv[2];

// Function for defining movie-this command
const movieThis = (title='Mr. Nobody') => {
    const omdbApi = require("omdb-client");
    const params = {
        apiKey: process.env.OMDB_KEY,
        title: title
    }

    omdbApi.get(params, (err, movies) => {
        if (err) {
            return console.log(err);
        };

        // console.logs Out Movie Info
        console.log(`Title: ${movies.Title}\nYear: ${movies.Year}\nIMDb Rating: ${movies.imdbRating}/10\nCountry Created: ${movies.Country}\nLaunguage: ${movies.Language}\nActors: ${movies.Actors}\nPlot: ${movies.Plot}`);
    })
}

// Function for defining spotify-this command
const spotifyThis = (song='The Sign, Ace of Base') => {
    const spotify = new Spotify(keys.spotify);
    spotify.search({type: 'track', query: song, limit: 5}, (err, data) => {
        if (err) {
            return console.log(err);
        };
        const songInfo = data.tracks.items[0];
        // console.log(songInfo);
        console.log(`Artist: ${songInfo.artists[0].name}\nSong: ${songInfo.name}\nLink to song: ${songInfo.external_urls.spotify}\nAlbum: ${songInfo.album.name}`);
    })
};

// movie-this command
if(command === "movie-this") {
    movieThis(process.argv[3]);
}

// my-tweets command
// else if(command === "my-tweets") {

// }

// spotify-this-song command
else if(command === "spotify-this-song") {
    spotifyThis(process.argv[3]);
}

// do-what-it-says command
//else if (command === "do-what-it-says") {

// }

// Let's user know that they are missing a command
else {
    console.log("No Command Given")
};