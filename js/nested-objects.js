'use strict';

var myPlants = [
  {
    type: "flowers",
    list: [
      "rose",
      "tulip",
      "dandelion"
    ]
  },
  {
    type: "trees",
    list: [
      "fir",
      "pine",
      "birch"
    ]
  }
];
//OJO!!! it's an array at the top!!!
console.log("secondTree is: " ,myPlants[1].list[1]);

var secondTree = myPlants[1].list[1];