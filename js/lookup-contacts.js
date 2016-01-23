'use strict';

var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["Javascript", "Gaming", "Foxes"]
    },
];

console.log("test: ", contacts[3].lastName);//test access ok

function lookUp(firstName, prop){
	console.log("** The contacts **");
	for(var i = 0, end = contacts.length; i < end; i++){
		console.log("Params passed in: ", contacts[i].firstName);
		// console.log("Prop print out: ", contacts[i].prop);

		if(contacts[i].firstName && contacts[i].hasOwnProperty(prop)){
			console.log("firstName in contacts: ", contacts[i].firstName);
			// console.log("Property checkup: ", contacts[i][prop);
			return contacts[i][prop];
		}
		else if(contacts[i].firstName !== contacts){
			//firstName is not in contacts
			console.log("No such contact");
		}else {
			//if property doesn not corresp. to any valid props
			console.log("No such property");
		}

	}

}
lookUp("Kristian", "lastName");


