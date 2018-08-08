// require("dotenv").config();
// require(keys.js).config();

// let spotify = new Spotify(keys.spotify)
// let twitter = new Twitter(keys.twitter)

// let command = process.argv[2];

// console.log(command);

// if(command === "my-tweets") {

// }else if(command === "spotify-this-song") {

// }else if(command === "movie-this") {
    // if(process.argv[3] === -1) {
    //     title = "Mr. Nobody"
    // }else {
    //     title = process.argv[3]
    // }

// }else if (command === "do-what-it-says") {

// }

const queryURL = `http://www.omdbapi.com/?t=${title}&apikey=${process.env.OMDB_KEY}&`

$.ajax({
    url: queryURL,
    method: "GET",
}).then(function(response) {
    console.log(response)
})