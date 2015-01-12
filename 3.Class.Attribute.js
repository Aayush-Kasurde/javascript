var Person = function (firstName) {
	this.firstName = firstName;
	console.log("Person Created");
};

var person1 = new Person("Alice");
var person2 = new Person("Bob");


console.log("Person1 is "  + person1.firstName);
console.log("Person2 is "  + person2.firstName);
