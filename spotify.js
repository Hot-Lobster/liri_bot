var request = require('request')
var fs = require('fs')


function spotifySong(song){
  spotify.search({ type: 'track', query: song}, function(error, data){
      if (!error){
          for (var i = 0; i <data.tracks.items.length; i++){
              var songData = data.tracks.items[i];
              //artist
              console.log(`Artist: ${songData.artists[0].name}`);
              //song
              console.log(`Song: ${songData.name}`);
              //preview
              console.log(`Preview URL: ${songData.preview_url}`);
              //album
              console.log(`Album: ${songData.album.name}`);
              console.log("---------------------------------")

              //Adds data to log.txt
              fs.appendFile('log.txt', songData.artists[0].name);
              fs.appendFile('log.txt', songData.name);
              fs.appendFile('log.txt', songData.preview_url);
              fs.appendFile('log.txt', songData.album.name);
              fs.appendFile('log.txt', "------------------------");
          }
      }   else{
          console.log("There was an error with your request")
      }  
  });  
}


module.exports = spotify;