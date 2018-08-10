// Reads and sets any environment variables with the dotenv package
require("dotenv").config();

// Imports keys.js
require("./keys.js");
// import {spotify} from "./keys.js";  <=== ES6 Version uses import, not currently supported by node. Just something I learned that I am leaving in the code for later use.

// Other Var ***Need to set up***
// let fs = require("fs");
// let spotify = new Spotify(keys.spotify);
// let twitter = new Twitter(keys.twitter);


// Defines command so that I don't have to type process.argv[2] all day
let command = process.argv[2];


let movieThis = (title='Mr. Nobody') => {
    let omdbApi = require("omdb-client");
    let params = {
        apiKey: process.env.OMDB_KEY,
        title: title
    }

    omdbApi.get(params, (err, movies) => {
        if (err) {
            return console.log(err);
        }

        // console.logs Out Movie Info
        console.log(`Title: ${movies.Title}\nYear: ${movies.Year}\nIMDb Rating: ${movies.imdbRating}/10\nCountry Created: ${movies.Country}\nLaunguage: ${movies.Language}\nActors: ${movies.Actors}\nPlot: ${movies.Plot}`);
    })
}

// Movie-This Command
if(command === "movie-this") {
    movieThis(process.argv[3]);
}
// else if(command === "my-tweets") {

// }else if(command === "spotify-this-song") {

// }else if (command === "do-what-it-says") {

// }

// Let's user know that they are missing a command
else {
    console.log("No Command Given")
}