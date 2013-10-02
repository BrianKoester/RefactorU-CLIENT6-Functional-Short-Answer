
	// 1. Rewrite the pluralize function using the ternary operator:
	// var word = "";
	// var number = 0;

	// var pluralize = function (word, number) {
	//  if(number === 1) {
	//   	return word;
	//  }
	//  else {
	//   	return word + "s";
	//  }
	// };

	// result = pluralize("Brian", 2);
	// console.log(result);	


	var pluralize = function (word, number) {
	return number === 1 ? word : (word + "s");
	}
		
	pluralize("Brian", 1);
	console.log(result);	



// 2. Functional Programming

// var victim = {};

// var getVictimInfo = function() {
//  victim.name = prompt("Please enter your name:");
//  victim.phone = prompt("Please enter your phone number:");
//  victim.street = prompt("Please enter your street:");
// };

// alert('Thank you! Victim entered: \n' + 
//  victim.name + ", " + 
//  victim.phone + ", " + 
//  victim.street);


var getVictimInfo = function() {
 	var inName = prompt("Please enter your name:");
 	var inPhone = prompt("Please enter your phone number:");
	var inStreet = prompt("Please enter your street:");

 	return {name: inName, phone: inPhone, street: inStreet};
};

var victim = getVictimInfo();

alert('Thank you! Victim entered: \n' + 
 victim.name + ", " + 
 victim.phone + ", " + 
 victim.street);



// 3. Remove falsey values from an array

var falseyArray = [0, null, "", undefined, NaN, false, 2, "string"];

var removeFalsey = function(array) {
var newArray = [];
	
	for (i=0; i<array.length; i++) {
		for (i=0; i<array.length; i++) {
		if (array[i]) newArray.push(array[i]);
		}
		
    }
	return newArray;

};
    
console.log("Truthy array: ", removeFalsey(falseyArray));