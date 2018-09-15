var spotify = require("./spotify")
var ombd = require("./ombd")
var bandsInTown = require("./bandsInTown")

var act = process.argv[2]
var term = process.argv.slice(3).join(" ")

var song = new Spotify()
var 

if (act === "spotify") {
  console.log("Searching for song");
  spotify.findSong(term);
} 
if (act === "ombd"){
  ombd.findMovie(term);
  console.log("Searching for movie");
}
else {
  bandsInTown.findBand(term);
  console.log("Searching for bands near you");
}
