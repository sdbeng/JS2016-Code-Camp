'use strict';

var contacts = [
	{
		"firstName":"Akira",
		"lastName":"Kurosawa",
		"number":"09956",
		"likes":["Pizza", "Coding", "Brownie Points"]
	},
	{
		"firstName":"Harry",
		"lastName":"bar",
		"number":"09856",
		"likes":["howarts", "Magic", "Harbrick"]
	},
	{
		"firstName":"Sebastian",
		"lastName":"ninja",
		"number":"09756",
		"likes":["Ice cream", "JavaScript", "Soccer"]
	}
];

//OJO!!! how we access the property values - with OR without quotes gets confused!!!! check prop!
	function lookUp(firstName, prop){
		var i = 0,
		 nitems = contacts.length;

		for(i; i < nitems; i++){
		// // console.log("Looping: ", contacts[i]);
		// 	console.log("firstName param passed in: ", firstName);
		// 	console.log("Property parm passed in: ", prop);

			if( (contacts[i]["firstName"] === firstName) && (contacts[i].hasOwnProperty(prop)) ){
				console.log("FIRSTNAME IS in there.", contacts[i]["firstName"]);
				// console.log("Prop IS in there.", prop);
				console.log("Prop value: ", contacts[i][prop]);
				// continue;
				return contacts[i][prop];


			}

			else if(firstName !== (contacts[i]["firstName"])){

				continue;
				console.log("This firstname is NO such CONTACT.", firstName);
				return "NO such CONTACT.";
			}
			else{
				console.log("NO such Prop.", contacts[i][prop]);
				return "No such property.";
			}


		}
	}

lookUp("dude", "fooprop");


