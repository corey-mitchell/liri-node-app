# liri-node-app

Siri-like command-line application which allows the user to; Search a song on spotify, check their last 10 tweets or find information on a movie all with simple commands.

## Getting Started

For this application to work locally, you will need to get api keys from spotify, twitter and omdb. Put your api keys in a .env file like so:

```
# Spotify API keys

SPOTIFY_ID='yourSpotifyID'
SPOTIFY_SECRET='yourSpotifySecret'

# Twitter API keys

TWITTER_CONSUMER_KEY=yourTwitterConsumerKey
TWITTER_CONSUMER_SECRET=yourTwitterConsumerSecret
TWITTER_ACCESS_TOKEN_KEY=yourTwitterAccessToken
TWITTER_ACCESS_TOKEN_SECRET=yourTwitterAccessSecret

# OMDb API key

OMDB_KEY='yourOMDBKey'
```
**Note** - *Be sure NOT to put any spaces in your key lines.*

Run `node liri <command>` in your terminal to begin.

The commands are: 'movie-this', 'my-tweets', 'spotify-this-song' and 'do-what-it-says'.


### Movie This

To find information on a movie, run `node liri movie-this '<movie title>'`. e.g.

![movie-this](https://user-images.githubusercontent.com/37916145/46517319-5eda0080-c834-11e8-9619-b0e9a96d3790.PNG)

**Note** - *If the title of the movie is more than one word, be sure the put the title in quotes.*

The output: 

![movie-this-output](https://user-images.githubusercontent.com/37916145/46517406-ad879a80-c834-11e8-8697-41903f13ff35.PNG)


### My Tweets

This function will display the user's last 20 tweets. To do so, run `node liri my-tweets`. e.g.

![my-tweets](https://user-images.githubusercontent.com/37916145/46517450-e889ce00-c834-11e8-918f-b1c2a9cc8f21.PNG)

*I only show one tweet in the photo, but the application DOES display the last 20.*


### Spotify this Song

To find information about a certain song, you will run `node liri spotify-this-song '<song title>'`. e.g.

![spotify-this-song](https://user-images.githubusercontent.com/37916145/46517556-6ea61480-c835-11e8-8134-12e08e40bcb0.PNG)

**Note** - *Just like with movies, if the song title is more than one word then put the title in quotes.*

The output:

![spotify-this-song-output](https://user-images.githubusercontent.com/37916145/46517559-706fd800-c835-11e8-8a99-885f60cc57d9.PNG)

**Note** - *This feature's information is limited to what spotify has access to. Therefore you may not receive the information you are looking for. To get a more accurate search try adding the artist with the song title. Like so* `node liri spotify-this-song '<song title> by <artist>'`or `node liri spotify-this-song '<song title>, <artist>'`.


### Do What it Says

Do-what-it-says is a simple command that reads off of the random.txt file. It reads a command and command specifics, if specifics are needed.

Simply run `node liri do-what-it-says`. e.g.

![do-what-it-says](https://user-images.githubusercontent.com/37916145/46517947-82eb1100-c837-11e8-9b44-d184488d223c.PNG)

Our random.txt file:

![random](https://user-images.githubusercontent.com/37916145/46518019-da897c80-c837-11e8-8a34-282d2975ac30.PNG)

**Note** - *The application reads the string BEFORE the comma as the command and AFTER the comma as command specifics.*

In this case, the command is 'spotify-this-song' and the specifics are 'Rooster by Alice in Chains'. Therefore our output is:

![do-what-it-says output](https://user-images.githubusercontent.com/37916145/46518155-787d4700-c838-11e8-8914-7266e76c2544.PNG)


## Author 

* **Corey Mitchell** - *Initial work* - (https://github.com/corey-mitchell)
