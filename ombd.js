var request = require('request')
var fs = require('fs')

function omdbData(movie){
  var omdbURL = "http://www.omdbapi.com/?t=" + movie + "&y=&plot=short&tomatoes=true&apikey=trilogy";


  request(omdbURL, function(error, response, body){
      if(!error && response.statusCode == 200){
          var body = JSON.parse(body);

          console.log(`Title: ${body.Title}`);
          console.log(`Release Year: ${body.Year}`);
          console.log(`IMbD Rating: ${body.imdbRating}`);
          console.log(`Country: ${body.Country}`);
          console.log(`Language: ${body.Language}`);
          console.log(`Plot: ${body.Plot}`);
          console.log(`Actors: ${body.Actors}`);
          console.log(`RT Rating: ${body.tomatoRating}`);
          console.log(`RT URL: ${body.tomatoURL}`);

          //Add data to log.txt
          fs.appendFile('log.txt', `Title: ${body.Title}`);
          fs.appendFile('log.txt', `Release Year: ${body.Year}`);
          fs.appendFile('log.txt', `IMdB Rating: ${body.imdbRating}`);
          fs.appendFile('log.txt', `Country: ${body.Country}`);
          fs.appendFile('log.txt', `Language: ${body.Language}`);
          fs.appendFile('log.txt', `Plot: ${body.Plot}`);
          fs.appendFile('log.txt', `Actors: ${body.Actors}`);
          fs.appendFile('log.txt', `RT Rating: ${body.tomatoRating}`);
          fs.appendFile('log.txt', `RT URL: ${body.tomatoURL}`);

      } else{
          console.log("there was an error with your request");
      }
      if(movie === "Mr. Nobody") {
          console.log("-----------------------");
          console.log("If you haven't watched 'Mr. Nobody,' then you should: http://www.imdb.com/title/tt0485947/");
          console.log("It's on Netflix!");            //add data to log.txt
          fs.appendFile('log.txt', "-----------------------");
          fs.appendFile('log.txt', "If you haven't watched 'Mr. Nobody,' then you should: http://www.imdb.com/title/tt0485947/");
          fs.appendFile('log.txt', "It's on Netflix!");
      }
  });
}

module.exports = ombd;