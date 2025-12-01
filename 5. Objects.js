// JavaScript Objects
// An Object is a variable that can hold many variables.

// Objects are collections of key-value pairs, where each key (known as property names) has a value.

// Objects can describe anything like houses, cars, people, animals, or any other subjects.



// How to Create a JavaScript Object
// An object literal is a concise way to create an object.

// An object literal is a list of key : value pairs inside curly braces { }:

// {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"}
// In object terms, the key : value pairs are the object properties.

// Examples
// All the examples below, create a JavaScript object with 4 properties.

// Create an Object
const person1 = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};








// JavaScript Object Methods
// Object methods are actions that can be performed on objects.

// Object methods are function definitions stored as property values:

// Property	Property Value
// firstName	John
// lastName	Doe
// age	50
// eyeColor	blue
// fullName	function() {return this.firstName + " " + this.lastName;}
// Example

const person = {
  firstName: "John",
  lastName : "Doe",
  id       : 5566,
  fullName : function() {
    return this.firstName + " " + this.lastName;
  }
};

// In the example above, this refers to the person object:

// this.firstName means the firstName property of person.

// this.lastName means the lastName property of person.




// Summary
// Objects are containers for Properties and Methods.

// Properties are named Values.

// Methods are Functions stored as Properties.

// Properties can be primitive values, functions, or even other objects.

// Constructors are Object Prototypes.






// In JavaScript, Objects are King.
// If you Understand Objects, you Understand JavaScript.
// In JavaScript, almost "everything" is an object.

// Objects are objects
// Maths are objects
// Functions are objects
// Dates are objects
// Arrays are objects
// Maps are objects
// Sets are objects
// All JavaScript values, except primitives, are objects.

// JavaScript Primitives
// A primitive data type is data type that can only store a single primitive value.

// JavaScript defines 7 types of primitive data types:

// Type	Example value
// string	"Hello"
// number	3.14
// boolean	true
// bigint	12345678901234
// null	null
// undefined	undefined
// symbol	symbol
















// Deleting Properties
// The delete keyword deletes a property from an object:

// Example
const person2 = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
};

// delete person.age;
// or delete person["age"];

// Example
const person3 = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
};

delete person["age"];
// Note:
// The delete keyword deletes both the value of the property and the property itself.

// After deletion, the property cannot be used before it is added back again.








// JavaScript Object Methods
// Object methods are actions that can be performed on objects.

// A method is a function definition stored as a property value.

// Adding a Method to an Object
// Adding a new method to an object is easy:

// Example
person.name = function () {
  return this.firstName + " " + this.lastName;
};



// Using JavaScript Methods
// This example uses the JavaScript toUpperCase() method to convert a text to uppercase:

// Example
person.name = function () {
  return (this.firstName + " " + this.lastName).toUpperCase();
};








// Using Object.values()
// Object.values() creates an array from the property values:

// Create an4 Object
const person4 = {
  name: "John",
  age: 30,
  city: "New York"
};

// Create an Array
const myArray = Object.values(person);

// Stringify the Array
let text1 = myArray.toString();
// Using Object.entries()
// Object.entries() makes it simple to use objects in loops:

// Example
const fruits = {Bananas:300, Oranges:200, Apples:500};

let text2 = "";
for (let [fruit, value] of Object.entries(fruits)) {
  text += fruit + ": " + value + "<br>";
}


// Using JSON.stringify()
// JavaScript objects can be converted to a string with JSON method JSON.stringify().

// JSON.stringify() is included in JavaScript and supported in all browsers.

// Note:
// The result will be a string written in JSON notation:

// {"name":"John","age":50,"city":"New York"}

// Example
// Create an Object
const person5 = {
  name: "John",
  age: 30,
  city: "New York"
};

// Stringify Object
let text = JSON.stringify(person);
