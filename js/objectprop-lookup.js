'use strict';

// Setup
function phoneticLookup(val) {
  var result = "";
//create an object to lookup a value
  var lookup = {
    "alpha": "Adams",
    "bravo": "Boston",
    "charlie": "Chicago",
    "delta": "Denver",
    "echo": "Easy",
    "foxtrot": "Frank"
  };

//since val is the "string" entered by the user, i have to use
// brackets in order to get the result, otherwise i get
// undefined
  result = lookup[val];
  // console.log("test: " + result);

  // result = lookup.val;//won't work - use the brackets notation!!!
  // console.log("result is: " + lookup.val);
  // console.log("alpha: " +lookup.alpha);

  // switch(val) {
  //   case "alpha":
  //     result = "Adams";
  //     break;
  //   case "bravo":
  //     result = "Boston";
  //     break;
  //   case "charlie":
  //     result = "Chicago";
  //     break;
  //   case "delta":
  //     result = "Denver";
  //     break;
  //   case "echo":
  //     result = "Easy";
  //     break;
  //   case "foxtrot":
  //     result = "Frank";
  // }

  // Only change code above this line
  return result;
}

// Change this value to test
console.log("lookup result: " + phoneticLookup("charlie"));
console.log("lookup result: " + phoneticLookup("delta"));


