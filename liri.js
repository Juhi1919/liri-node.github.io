require(".env").config();
var fs = require('fs');
var keys = require('./key.js');
var request = require('request');

var spotify = new Spotify(keys.spotify);
  var client = new Twitter(keys.twitter);

  var parameters = process.argv[3];
  var action = process.argv[2];


  switch (action)
  {
    case 'my-tweets' :
      Tweets();
      break;
    /*case 'spotify-this-song' :
      Music();
      break;*/
  }


//Twiter
function Tweets(){
	// Calling from keys.js
	/*var client = new twitter(keys.twitterKeys);*/
    console.log("tweets");
    console.log("*-*-*-*-*-*-*-*-*-*-*--*-*-*-*-");
    var params = {screen_name: 'nodejs'};
	client.get('statuses/user_timeline', param, function(error, tweets, response) {
		if (!error) {
			console.log("Your last 20 tweets");
			// Looping my last 20 tweets
			for (i = 0; i < tweets.length; i++) {
				console.log(tweets[i].created_at + "You tweeted: " + tweets[i].text);
			}
		}
	});
}

 