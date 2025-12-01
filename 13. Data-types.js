
// JavaScript Data Types
// JavaScript has 8 Datatypes
// A JavaScript variable can hold 8 types of data:

// Type	        Description
// String	    A text of characters enclosed in quotes
// Number	    A number representing a mathematical value
// Bigint	    A number representing a large integer
// Boolean	    A data type representing true or false
// Object	    A collection of key-value pairs of data
// Undefined	A primitive variable with no assigned value
// Null	        A primitive value representing object absence
// Symbol	    A unique and primitive identifier





// Examples
// Strings
let color = "Yellow";
let lastName = "Johnson";

// Number
let length = 16;
let weight = 7.5;

// BigInt
let x = 1234567890123456789012345n;
let y = BigInt(1234567890123456789012345)

// Boolean
let x1 = true;
let y1 = false;

// Object
const person = {firstName:"John", lastName:"Doe"};

// Array object
const cars = ["Saab", "Volvo", "BMW"];

// Date object
const date = new Date("2022-03-25");

// Undefined
let x2;
let y2;

// Null
let x3 = null;
let y3 = null;

// Symbol
const x4 = Symbol();
const y4 = Symbol();






// JavaScript typeof
// The typeof Operator
// The typeof operator returns the data type of a JavaScript variable.

// Primitive Data Types
// In JavaScript, a primitive value is a single value with no properties or methods.

// JavaScript has 7 primitive data types:

// string
// number
// boolean
// bigint
// symbol
// null
// undefined
// The typeof operator returns the type of a variable or an expression.

// Examples
typeof "John"         // Returns string
typeof ("John"+"Doe") // Returns string
typeof 3.14           // Returns number
typeof 33             // Returns number
typeof (33 + 66)      // Returns number
typeof true           // Returns boolean
typeof false          // Returns boolean
typeof 1234n          // Returns bigint
typeof Symbol()       // Returns symbol
typeof x              // Returns undefined
typeof null           // Returns object


// Note:
// In JavaScript, null is a primitive value. However, typeof returns "object".

// This is a well-known bug in JavaScript and has historical reasons.



// Complex Data Types
// A complex data type can store multiple values and/or different data types together.

// JavaScript has one complex data type:

// object
// All other complex types like arrays, functions, sets, and maps are just different types of objects.

// The typeof operator returns only two types:

// object
// function
// Example
typeof {name:'John'}   // Returns object
typeof [1,2,3,4]       // Returns object
typeof new Map()       // Returns object
typeof new Set()       // Returns object

typeof function (){}   // Returns function


// Note:
// The typeof operator returns object for all types of objects:

// objects
// arrays
// sets
// maps
// You cannot use typeof to determine if a JavaScript object is an array or a date.


// How to Recognize an Array
// How to know if a variable is an array?

// ECMAScript 5 (2009) defined a new method for this: Array.isArray():

// Example
// Create an Array
const fruits = ["apples", "bananas", "oranges"];
Array.isArray(fruits); // returns true




// The instanceof Operator
// The instanceof operator returns true if an object is an instance of a specified object type:

// Examples
// Create a Date
const time = new Date();

(time instanceof Date);

// Create an Array
const fruitsArr = ["apples", "bananas", "oranges"];

(fruits instanceof Array);
// Create a Map
const fruitsMap = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200]
]);


(fruits instanceof Map);
// Create a Set
const fruitsSet = new Set(["apples", "bananas", "oranges"]);

(fruits instanceof Set);





// All Together
typeof "John"          // Returns "string"
typeof ("John"+"Doe")  // Returns "string"
typeof 3.14            // Returns "number"
typeof (33 + 66)       // Returns "number"
typeof NaN             // Returns "number"
typeof 1234n           // Returns "bigint"
typeof true            // Returns "boolean"
typeof false           // Returns "boolean"
typeof {name:'John'}   // Returns "object"
typeof [1,2,3,4]       // Returns "object"
typeof {}              // Returns "object"
typeof []              // Returns "object"
typeof new Object()    // Returns "object"
typeof new Array()     // Returns "object"
typeof new Date()      // Returns "object"
typeof new Set()       // Returns "object"
typeof new Map()       // Returns "object"
typeof function () {}  // Returns "function"
typeof x               // Returns "undefined"
typeof null            // Returns "object"








// JavaScript toString()
// The JavaScript toString() method converts a variable (or a value) to a string.

// It is a built-in method for many data types, including numbers, arrays, dates, and objects.

// The method is useful for:

// Converting data to a readable format for display
// Ensuring type compatibility when a string is required
// Customizing objects other user interfaces
// Customizing objects for debugging






// JavaScript Type Conversion

//      Converting Strings to Numbers
//      Converting Numbers to Strings
//      Converting Dates to Numbers
//      Converting Numbers to Dates
//      Converting Booleans to Numbers
//      Converting Numbers to Booleans





// JavaScript Type Conversion
// JavaScript variables can be converted to a new variable and another data type:

// By the use of a JavaScript function
// Automatically by JavaScript itself
// Converting Strings to Numbers
// The global method Number() converts a variable (or a value) into a number.

// A numeric string (like "3.14") converts to a number (like 3.14).

// An empty string (like "") converts to 0.

// A non numeric string (like "John") converts to NaN (Not a Number).

// Examples
// These will convert:

console.log(Number("3.14"));
console.log(Number(Math.PI));
console.log(Number(" "));
console.log(Number(""));

// These will not convert:

console.log(Number("99 88"));
console.log(Number("John"));




// Number Methods
// In the chapter Number Methods, you will find more methods that can be used to convert strings to numbers:

// Method	Description
// Number()	Returns a number, converted from its argument
// parseFloat()	Parses a string and returns a floating point number
// parseInt()	Parses a string and returns an integer


// The Unary + Operator
// The unary + operator can be used to convert a variable to a number:

// Example
let ys = "5";      // y is a string
let xs = + y;      // x is a number

// If the variable cannot be converted, it will still become a number, but with the value NaN (Not a Number):

// Example
let yj = "John";   // y is a string
let xj = + y;      // x is a number (NaN)


// More Methods
// In the chapter Number Methods, you will find more methods that can be used to convert numbers to strings:

// Method	Description
// toExponential()	  Returns a string, with a number rounded and written using exponential notation.
// toFixed()	      Returns a string, with a number rounded and written with a specified number of decimals.
// toPrecision()	  Returns a string, with a number written with a specified length





// Converting Dates to Numbers
// The global method Number() can be used to convert dates to numbers.

// d = new Date();
// Number(d)          // returns 1404568027739
// The date method getTime() does the same.

// d = new Date();
// d.getTime()        // returns 1404568027739
// Converting Dates to Strings
// The global method String() can convert dates to strings.

// String(Date())  // returns "Thu Jul 17 2014 15:38:19 GMT+0200 (W. Europe Daylight Time)"
// The Date method toString() does the same.

// Example
// Date().toString()  // returns "Thu Jul 17 2014 15:38:19 GMT+0200 (W. Europe Daylight Time)"
// In the chapter Date Methods, you will find more methods that can be used to convert dates to strings:

// Method	Description
// getDate()	         Get the day as a number (1-31)
// getDay()	             Get the weekday a number (0-6)
// getFullYear()         Get the four digit year (yyyy)
// getHours()	         Get the hour (0-23)
// getMilliseconds()     Get the milliseconds (0-999)
// getMinutes()	         Get the minutes (0-59)
// getMonth()	         Get the month (0-11)
// getSeconds()	         Get the seconds (0-59)
// getTime()	         Get the time (milliseconds since January 1, 1970)







// Converting Booleans to Numbers
// The global method Number() can also convert booleans to numbers.

Number(false)     // returns 0
Number(true)      // returns 1
// Converting Booleans to Strings
// The global method String() can convert booleans to strings.

String(false)      // returns "false"
String(true)       // returns "true"
// The Boolean method toString() does the same.

false.toString()   // returns "false"
true.toString()    // returns "true"








// Automatic Type Conversion
// When JavaScript tries to operate on a "wrong" data type, it will try to convert the value to a "right" type.

// The result is not always what you expect:

5 + null    // returns 5         because null is converted to 0
"5" + null  // returns "5null"   because null is converted to "null"
"5" + 2     // returns "52"      because 2 is converted to "2"
"5" - 2     // returns 3         because "5" is converted to 5
"5" * "2"   // returns 10        because "5" and "2" are converted to 5 and 2




// Automatic String Conversion
// JavaScript automatically calls the variable's toString() function when you try to "output" an object or a variable:

document.getElementById("demo").innerHTML = myVar;

// if myVar = {name:"Fjohn"}  // toString converts to "[object Object]"
// if myVar = [1,2,3,4]       // toString converts to "1,2,3,4"
// if myVar = new Date()      // toString converts to "Fri Jul 18 2014 09:08:55 GMT+0200"
// Numbers and booleans are also converted, but this is not very visible:

// if myVar = 123             // toString converts to "123"
// if myVar = true            // toString converts to "true"
// if myVar = false           // toString converts to "false"









// // Original Value -	Converted to Number -	Converted to String -	Converted to Boolean
// false	                    0	                  "false"	              false	
// true	                      1	                  "true"	              true	
// 0   	                      0	                  "0"	                  false	
// 1	                        1	                  "1"	                  true	
// "0" 	                      0	                  "0"	                  true	
// "000"	                    0	                  "000"	                true	
// "1"	                      1	                  "1"	                  true	
// NaN	                      NaN	                "NaN"	                false	
// Infinity	                  Infinity	          "Infinity"	          true	
// -Infinity	                -Infinity	          "-Infinity"	          true	
// ""	                        0	                  ""	                  false	
// "20"	                      20	                "20"	                true	
// "twenty"	                  NaN	                "twenty"	            true	
// [ ]	                      0	                  ""	                  true	
// [20]	                      20	                "20"	                true	
// [10,20]	                  NaN	                "10,20"	              true	
// ["twenty"]	                NaN	                "twenty"	            true	
// ["ten","twenty"]	          NaN	                "ten,twenty"	        true	
// function(){}	              NaN	                "function(){}"	      true	
// { }	                      NaN	                "[object Object]"	    true	
// null	                      0	                  "null"	              false	
// undefined	                NaN	                "undefined"	          false	
