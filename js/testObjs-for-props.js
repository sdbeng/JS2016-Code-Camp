'use strict';

var myObj = {
  gift: "pony",
  pet: "kitten",
  bed: "sleigh"
};

function checkObj(checkProp) {
	//TRYCKY!!!
	//you must pass the checkProp in without quotes!!!
	if (myObj.hasOwnProperty(checkProp)){
		var r = myObj[checkProp];
		console.log("Founded prop is: ",r)
		return myObj[checkProp];
	}else{
		return "Not Found";
	}

}

// Test your code by modifying these values
// checkObj("gift");

// Test your code by modifying these values
console.log(checkObj("gift"));//pony
console.log(checkObj("pet"));//kitten
console.log(checkObj("bed"));//sleigh
console.log(checkObj("foo"));//Not found
