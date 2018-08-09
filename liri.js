// Reads and sets any environment variables with the dotenv package
require("dotenv").config();

// Imports keys.js
let keys = require("./keys.js");
// import {spotify} from "./keys.js";  <=== ES6 Version uses import, not currently supported by node

// Other Var ***Need to set up***
// let fs = require("fs");
// let spotify = new Spotify(keys.spotify);
// let twitter = new Twitter(keys.twitter);


// Defines command so that I don't have to type process.argv all day
let command = process.argv[2];

// Movie-This Command
if(command === "movie-this") {
    let movieTitle = process.argv[3]
    let omdbApi = require("omdb-client");
    let params = {
        apiKey: process.env.OMDB_KEY,
        title: movieTitle
    }

    omdbApi.get(params, (err, movies) => {
        if (err) {
            return console.log(err);
        }

        // If no movie is entered this default it to Mr. Nobody as per homework instructions
        // ***Need to fix***
        if (process.argv[3] === -1) {
            title = "Mr. Nobody"
            return console.log (movies.Title)
        }

        // console.logs Out Movie Info
        console.log(`Title: ${movies.Title}\nYear: ${movies.Year}\nIMDb Rating: ${movies.imdbRating}/10\nCountry Created: ${movies.Country}\nLaunguage: ${movies.Language}\nActors: ${movies.Actors}\nPlot: ${movies.Plot}`)

    })
}
// else if(command === "my-tweets") {

// }else if(command === "spotify-this-song") {

// }else if (command === "do-what-it-says") {

// }else {
//     console.log("No Command Given")
// }