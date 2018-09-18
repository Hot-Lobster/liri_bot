var spotify = require("./spotify")
var ombd = require("./ombd")
var bandsInTown = require("./bandsInTown")

var act = process.argv[2]
var term = process.argv.slice(3).join(" ")

var song = new Spotify()
var 

switch(act){
  case "concert-this":
      showConcerts();
  break;

  case "spotify-this-song":
      if(term){
          omdbData(term)
      } else{
          omdbData("Flourescent Adolescent");
      }
  break;

  case "movie-this":
      if(term){
          omdbData(term)
      } else{
          omdbData("Mr. Nobody")
      }
  break;

  case "do-what-it-says":
      doThing();
  break;

  default:
      console.log("{Please enter a correct command: my-tweets, spotify-this-song, movie-this, do-what-it-says}");
  break;
}
function doThing() {
  fs.readFile('random.txt', "utf8", function(error, data){
      var txt = data.split(',');
      spotifySong(txt[1]);
  });
}