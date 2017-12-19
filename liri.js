var fs = require("fs");
var twitter = require('twitter');
var key = require('./key.js');
twitterKeys = key.twitterKeys
var client = new twitter(twitterKeys);
var spotify = require("spotify");
var spotifyKey= require('./key.js');

var params = {ONE_name: 'nodejs',count: 20};
	


var switchFunction = process.argv[2];

if (switchFunction	=== "spotify-this-song"){
	gotData();
}
else if (switchFunction	 === "my-tweets"){
	client.get('statuses/user_timeline', params, gotData);
}

function gotData(error, tweets, response) {
	
  if (!error) {
    for(var i = 0; i < tweets.length; i++) {
	console.log(tweets[i].text);
	}
  }
}

// var query = process.argv[3]
// var queryUrl = "http://www.omdbapi.com/?t= "+ query + "&y=&plot=short&apikey=trilogy"
// var request = require('request');

//  request(queryUrl, function(error, response, body) {
//  	if (error){
//  		console.log(error);
//  	}
//  	else {
//  		 	console.log(body)
//       body = JSON.parse(body);
// 	  console.log('error:', error);
// 	  console.log('statusCode:', response && response.statusCode); 
// 	  console.log(body);
// 	  console.log('Title:', body.Title);
// 	  console.log('Years:', body.Year);
// 	  console.log('Country:',body.Country);
// 	  console.log('Source:', body.Ratings[0].Source + "Rating:"+body.Ratings[0].Value);
// 	  console.log('rating:', body.Ratings[1]);
		
// 		if (!error) {
// 		      for(var i = 0; i< body.Ratings.length; i++) {
// 		  console.log('Source:', body.Ratings[i].Source + "Rating:"+body.Ratings[i].Value);

// 		  }
// 		}

//  	}
// });

//  commandTw0 = process.argv.slice(3).join(" ");
 
//  function spotifymusic(){
//  	console.log("Spotify function")
//  	fs. appendFile("random.txt ",  "," + commandTw0 );
// 	spotify.search({ type:'track', query: commandTw0}, function (err,data,response) {
// 		console.log (data.track.items [0].artist[0]);
// 		console.log (data.track.items [0].name); 		console.log (data.track.items [0].album.name);
//  		console.log (data.track.items [0].preview_url);
//  	});
// }

 
//spotifymusic.search({ type: 'track', query: 'I want it that way' }, function(err, data) {
   // if (!error) {
//    for(var i = 0; i< data.length; i++) {
	//console.log(data[i].text);
//  }
 
    // Do something with 'data' 
//});
