'use strict';

var collection = {
    2548: {
      album: "Slippery When Wet",
      artist: "Bon Jovi",
      tracks: [
        "Let It Rock",
        "You Give Love a Bad Name"
      ]
    },
    2468: {
      album: "1999",
      artist: "Prince",
      tracks: [
        "1999",
        "Little Red Corvette"
      ]
    },
    1245: {
      artist: "Robert Palmer",
      tracks: [ ]
    },
    5439: {
      album: "ABBA Gold"
    }
};
// Keep a copy of the collection for tests
var collectionCopy = JSON.parse(JSON.stringify(collection));
// console.log(collectionCopy);

// declare func and pass params, for ex. id, artist, Bon Jovi
function update(id, prop, value) {
	//test scope first
	var data = collection[2548].artist;
	// console.log("Testing a collectionvalue: " ,data);

	// for(id in collection){
		if(value !== "" && prop !== "tracks"){
			// console.log("* If value not empty and prop isn't tracks: ", value);
			// console.log("* prop is: ", prop);
			collection[id][prop] = value;//sets the value to this collection prop passed in
			// console.log("x: ", collection[id][prop]);
			// collection[id] = prop.value;
		}
		else if (prop == "tracks" && value !== ""){
			console.log("** If value not empty and prop is tracks: ", value);
			collection[id][prop].push(value);
			console.log("- track added: ", collection[id][prop]);
		}
		else if (value === ""){
			// console.log("*** if value is empty and prop is: ", prop);
			console.log("*** Deleted prop(blank value) is: ", collection[id][prop]);
			delete collection[id][prop];//delete prop
		}
	// }

  return collection;
}
update(5439, "artist", "ABBA");
update(2468, "tracks", "anotherGreatPrinceTitle");
update(5439, "foo", "bar");
update(5439, "foo", "");

var collectionCopy = JSON.parse(JSON.stringify(collection));
console.log(collectionCopy);






