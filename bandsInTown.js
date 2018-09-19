var request = require('request')
var fs = require('fs')

function showConcerts(){
  var concertsURL = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp"

  request(concertsURL, function (error, response, body){
      if(!error && response.statusCode == 200){
          var body = JSON.parse(body);
      
          console.log(`Artist: ${body.artistData.name}`)
          console.log(`Date: ${body.eventData.datetime}`)
          console.log(`Venue: ${body.venueData.name}`)

          //add to log.txt
          fs.appendFile('log.txt', "Artist: " + body.artistData.name);
          fs.appendFile('log.txt', "Date: " + body.eventData.datetime);
          fs.appendFile('log.txt', "Venue: " + body.venueData.name);
      }
      else{
          console.log("There was an error with your request")
      }
  });
}

module.exports=showConcerts;  