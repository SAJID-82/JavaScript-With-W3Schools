
// JavaScript Scope
// Scope = Visibility
// Scope determines the accessibility (visibility) of variables.

// JavaScript variables have 3 types of scope:

// Global scope
// Function scope
// Block scope



// Global Scope
// Variables declared Globally (outside any block or function) have Global Scope.

// Global variables can be accessed from anywhere in a JavaScript program.

// Variables declared with var, let and const are quite similar when declared outside a block.

// Example

// A variable declared outside a function, becomes GLOBAL.

let carName = "Volvo";
// code here can use carName

function myFunction() {
// code here can also use carName
}


// Global variables has Global Scope:
// All scripts and functions in the same web page can access a variable with global scope.


// Function Scope
// Each JavaScript function have their own scope.

// Variables defined inside a function are not accessible (visible) from outside the function.

// Variables declared with var, let and const are quite similar when declared inside a function.


// Example
// Variables declared within a JavaScript function, are LOCAL to the function:

// code here can NOT use carName

function myFunction1() {
  let carName = "Volvo";
  // code here CAN use carName
}

// code here can NOT use carName








// Block Scope
// Before ES6, JavaScript variables could only have Global Scope or Function Scope.

// ES6 introduced two important new JavaScript keywords: let and const.

// These two keywords provide Block Scope in JavaScript.

// Variables declared with let and const inside a code block are "block-scoped," meaning they are only accessible within that block.

// This helps prevent unintended variable overwrites and promotes better code organization:

// Example
{
  let x = 2;
}
// x can NOT be used here



// Automatically Global
// If you assign a value to a variable that has not been declared, it will become a GLOBAL variable.

// This code example will declare a global variable carName, even if the value is assigned inside a function.

// Example
myFunction2();

// code here can use carName

function myFunction2() {
  carName = "Volvo";
}


// Strict Mode
// All modern browsers support running JavaScript in "Strict Mode".

// In "Strict Mode", undeclared variables are not automatically global.





// JavaScript Hoisting
// Hoisting is JavaScript's default behavior of moving declarations to the top.

// JavaScript Declarations are Hoisted
// In JavaScript, a variable can be declared after it has been used.

// In other words; a variable can be used before it has been declared.

// Example 1 gives the same result as Example 2:


// Example 1
x = 5; // Assign 5 to x

elem = document.getElementById("demo"); // Find an element
elem.innerHTML = x;                     // Display x in the element

var x; // Declare x


// Example 2
var x1; // Declare x
x = 5; // Assign 5 to x

elem = document.getElementById("demo"); // Find an element
elem.innerHTML = x1;                     // Display x in the element







// The let and const Keywords
// Variables defined with let and const are hoisted to the top of the block, but not initialized.

// Meaning: The block of code is aware of the variable, but it cannot be used until it has been declared.

// Using a let variable before it is declared will result in a ReferenceError.

// The variable is in a "temporal dead zone" from the start of the block until it is declared:

// Example
// This will result in a ReferenceError:
carName = "Volvo";
let carName1;
// Using a const variable before it is declared, is a syntax error, so the code will simply not run.

// Example
// This code will not run.

carName = "Volvo";
// const carName2;


// JavaScript Initializations are Not Hoisted
// JavaScript only hoists declarations, not initializations.

// Example 1 does not give the same result as Example 2:

// Example 1
var x = 5; // Initialize x
var y = 7; // Initialize y

// elem = document.getElementById("demo"); // Find an element
elem.innerHTML = x + " " + y;           // Display x and y

// Example 2
var x = 5; // Initialize x

elem = document.getElementById("demo"); // Find an element
elem.innerHTML = x + " " + y;           // Display x and y

var y = 7; // Initialize y

// Does it make sense that y is undefined in the last example?

// This is because only the declaration (var y), not the initialization (=7) is hoisted to the top.

// Because of hoisting, y has been declared before it is used, but because initializations are not hoisted, the value of y is undefined.

// Example 2 is the same as writing:

// Example
var x = 5; // Initialize x
var y;     // Declare y

elem = document.getElementById("demo"); // Find an element
elem.innerHTML = x + " " + y;           // Display x and y
// 
y = 7;    // Assign 7 to y


// Declare Your Variables At the Top !
// Hoisting is (to many developers) an unknown or overlooked behavior of JavaScript.

// If a developer doesn't understand hoisting, programs may contain bugs (errors).

// To avoid bugs, always declare all variables at the beginning of every scope.

// Since this is how JavaScript interprets the code, it is always a good rule.

// JavaScript in strict mode does not allow variables to be used if they are not declared.
// Study "use strict" in the next chapter.




// JavaScript Use Strict
// The "use strict" Directive
// The "use strict" directive was new in ECMAScript version 5.

// It defines that JavaScript code should be executed in "strict mode".

// It is not a statement. It is a literal expression, ignored by earlier versions of JavaScript.

// The purpose of "use strict" is to indicate that the code should be executed in "strict mode".

// With strict mode, you can not, for example, use undeclared variables.



// Example
"use strict";
x = 3.14;       // This will cause an error because x is not declared


// Example
"use strict";
myFunction();

function myFunction() {
  y = 3.14;   // This will also cause an error because y is not declared
}



// JavaScript Code Blocks
// Curly Braces
// A code block or block statement is a group of statements enclosed within curly braces { }.

// Code blocks are important for controlling the flow of execution and defining variable scope within a JavaScript program.

// Code Blocks and Statements
// Code blocks allows for multiple statements to be treated as a single unit.

// The body of a JavaScript function is always enclosed within a code block:

// Example
function myFunctionCB() {
  // This is a code block
}


// Defining Scope
// Variables declared with let and const inside a code block are "block-scoped," meaning they are only accessible within that specific block.

// This helps prevent unintended variable overwrites and promotes better code organization:

// Example
{
  let x = 10;
  // x is accessible here
}

// x is not accessible here






// Standalone Blocks
// Code blocks can also exist independently without being attached to an if statement, a function or a loop.

// This can be used to create a scope for let and const variables.

// Example
{
  let x = 10;
  let y = 100;
  let areal = x * y;
}
// This example above demonstrates how a standalone block can be used to limit the scope of variables.

// Encapsulation
// Variables inside the block are only available in the block.

// This prevents "polluting" the global scope, keeps the code clean, and reduces the risk of name collisions.

// Temporary Use
// If you only need variables for a calculation, a block lets you declare them, use them, and discard them.

// Organized Code
// You can group related variables and statements in their own scope to avoid accidental name conflict without forcing them into a function or an object.

// This improves readability and avoids accidental name conflictre-use of variable names outside the block.









// JavaScript Style Guide
// Always use the same coding conventions for all your JavaScript projects.

// JavaScript Coding Conventions
// Coding conventions are style guidelines for programming. They typically cover:

// Naming and declaration rules for variables and functions.
// Rules for the use of white space, indentation, and comments.
// Programming practices and principles.
// Coding conventions secure quality:

// Improve code readability
// Make code maintenance easier
// Coding conventions can be documented rules for teams to follow, or just be your individual coding practice.

// This page describes the general JavaScript code conventions used by W3Schools.
// You should also read the next chapter "Best Practices", and learn how to avoid coding pitfalls.



// Variable Names

// At W3schools we use camelCase for identifier names (variables and functions).

// All names start with a letter.

// At the bottom of this page, you will find a wider discussion about naming rules.

firstName = "John";
lastName = "Doe";

price = 19.90;
tax = 0.20;

fullPrice = price + (price * tax);

// Spaces Around Operators
// Always put spaces around operators ( = + - * / ), and after commas:

// Examples:
let x = y + z;
const myArray = ["Volvo", "Saab", "Fiat"];



// Code Indentation
// Always use 2 spaces for indentation of code blocks:

// Functions:
function toCelsius(fahrenheit) {
  return (5 / 9) * (fahrenheit - 32);
}




// Statement Rules
// General rules for simple statements:

// Always end a simple statement with a semicolon.
// Examples:

const cars = ["Volvo", "Saab", "Fiat"];

const person1 = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
};
// General rules for complex (compound) statements:

// Put the opening bracket at the end of the first line.
// Use one space before the opening bracket.
// Put the closing bracket on a new line, without leading spaces.
// Do not end a complex statement with a semicolon.

// Functions:
function toCelsius(fahrenheit) {
  return (5 / 9) * (fahrenheit - 32);
}


// Loops:
for (let i = 0; i < 5; i++) {
  x += i;
}


// Conditionals:
if (time < 20) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}




// Object Rules
// General rules for object definitions:

// Place the opening bracket on the same line as the object name.
// Use colon plus one space between each property and its value.
// Use quotes around string values, not around numeric values.
// Do not add a comma after the last property-value pair.
// Place the closing bracket on a new line, without leading spaces.
// Always end an object definition with a semicolon.
// Example
const person2 = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
};


// Short objects can be written compressed, on one line, using spaces only between properties, like this:

const person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};



// Line Length < 80
// For readability, avoid lines longer than 80 characters.

// If a JavaScript statement does not fit on one line, the best place to break it, is after an operator or a comma.

// Example
document.getElementById("demo").innerHTML =
"Hello Dolly.";






// Loading JavaScript in HTML
// Use simple syntax for loading external scripts (the type attribute is not necessary):

// <script src="myscript.js"></script>
// Accessing HTML Elements
// A consequence of using "untidy" HTML styles, might result in JavaScript errors.

// These two JavaScript statements will produce different results:

const obj_1 = getElementById("Demo")

const obj_2 = getElementById("demo")


// If possible, use the same naming convention (as JavaScript) in HTML.

// Visit the HTML Style Guide.




// File Extensions
// HTML files should have a .html extension (.htm is allowed).

// CSS files should have a .css extension.

// JavaScript files should have a .js extension.


// Use Lower Case File Names
// Most web servers (Apache, Unix) are case sensitive about file names:

// london.jpg cannot be accessed as London.jpg.

// Other web servers (Microsoft, IIS) are not case sensitive:

// london.jpg can be accessed as London.jpg or london.jpg.

// If you use a mix of upper and lower case, you have to be extremely consistent.

// If you move from a case insensitive, to a case sensitive server, even small errors can break your web site.

// To avoid these problems, always use lower case file names (if possible).



// Performance
// Coding conventions are not used by computers. Most rules have little impact on the execution of programs.

// Indentation and extra spaces are not significant in small scripts.

// For code in development, readability should be preferred. Larger production scripts should be minimized.




// JavaScript Best Practices
// Avoid global variables, avoid new, avoid ==, avoid eval()

// Avoid Global Variables
// Minimize the use of global variables.

// This includes all data types, objects, and functions.

// Global variables and functions can be overwritten by other scripts.

// Use local variables instead, and learn how to use closures.

// Always Declare Local Variables
// All variables used in a function should be declared as local variables.

// Local variables must be declared with the var, the let, or the const keyword, otherwise they will become global variables.

// Strict mode does not allow undeclared variables.

// Declarations on Top
// It is a good coding practice to put all declarations at the top of each script or function.

// This will:

// Give cleaner code
// Provide a single place to look for local variables
// Make it easier to avoid unwanted (implied) global variables
// Reduce the possibility of unwanted re-declarations
// Declare at the beginning
let firstName, lastName, price, discount, fullPrice;

// Use later
firstName = "John";
lastName = "Doe";

price = 19.90;
discount = 0.10;

fullPrice = price - discount;


// This also goes for loop variables:

// for (let i = 0; i < 5; i++) {


// Initialize Variables
// It is a good coding practice to initialize variables when you declare them.

// This will:

// Give cleaner code
// Provide a single place to initialize variables
// Avoid undefined values
// Declare and initiate at the beginning

// let firstName = "";
// let lastName = "";
// let price = 0;
// let discount = 0;
// let fullPrice = 0,
// const myArray = [];
// const myObject = {};

// Initializing variables provides an idea of the intended use (and intended data type).


// Re-Declaring JavaScript Variables
// If you re-declare a JavaScript variable declared with var, it will not lose its value.

// The variable carName will still have the value "Volvo" after the execution of these statements:

// Example (Not Recommended)
var carName3 = "Volvo";
var carName3;
// You cannot re-declare a variable declared with let or const.

// Examples
// This will not work:

// let carName4 = "Volvo";
// let carName4;
// This will not work:

// const carName5 = "Volvo";
// const carName5;
// Declare Objects with const
// Declaring objects with const will prevent any accidental change of type:

// Example
let cars1 = {type:"Fiat", model:"500", color:"white"};
cars1 = "Fiat";      // Changes object to string

const cars2 = {type:"Fiat", model:"500", color:"white"};
cars2 = "Fiat";      // Not possible
// Declare Arrays with const
// Declaring arrays with const will prevent any accidential change of type:

// Example
let cars4 = ["Saab", "Volvo", "BMW"];
cars4 = 3;    // Changes array to number

const cars5 = ["Saab", "Volvo", "BMW"];
cars5 = 3;    // Not possible



// Don't Use new Object()
// Use "" instead of new String()
// Use 0 instead of new Number()
// Use false instead of new Boolean()
// Use {} instead of new Object()
// Use [] instead of new Array()
// Use /()/ instead of new RegExp()
// Use function (){} instead of new Function()
// Example
let x1 = "";             // new primitive string
let x2 = 0;              // new primitive number
let x3 = false;          // new primitive boolean
const x4 = {};           // new object
const x5 = [];           // new array object
const x6 = /()/;         // new regexp object
const x7 = function(){}; // new function object


// Beware of Automatic Type Conversions
// JavaScript is loosely typed.

// A variable can contain all data types.

// A variable can change its data type:

// Example
let x = "Hello";     // typeof x is a string
x = 5;               // changes typeof x to a number
// Beware that numbers can accidentally be converted to strings or NaN (Not a Number).

// When doing mathematical operations, JavaScript can convert numbers to strings:


// Example
let x = 5 + 7;       // x.valueOf() is 12,  typeof x is a number
let x = 5 + "7";     // x.valueOf() is 57,  typeof x is a string
let x = "5" + 7;     // x.valueOf() is 57,  typeof x is a string
let x = 5 - 7;       // x.valueOf() is -2,  typeof x is a number
let x = 5 - "7";     // x.valueOf() is -2,  typeof x is a number
let x = "5" - 7;     // x.valueOf() is -2,  typeof x is a number
let x = 5 - "x";     // x.valueOf() is NaN, typeof x is a number


// Subtracting a string from a string, does not generate an error but returns NaN (Not a Number):

// Example
"Hello" - "Dolly"    // returns NaN


// Use === Comparison
// The == comparison operator always converts (to matching types) before comparison.

// The === operator forces comparison of values and type:

// Example
0 == "";        // true
1 == "1";       // true
1 == true;      // true

0 === "";       // false
1 === "1";      // false
1 === true;     // false




// Use Parameter Defaults
// If a function is called with a missing argument, the value of the missing argument is set to undefined.

// Undefined values can break your code. It is a good habit to assign default values to arguments.

// Example
function myFunction(x, y) {
  if (y === undefined) {
    y = 0;
  }
}


// ECMAScript 2015 allows default parameters in the function definition:

// function (a=1, b=1) { /*function code*/ }



// End Your Switches with Defaults
// Always end your switch statements with a default. Even if you think there is no need for it.

// Example
switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
    break;
  default:
    day = "Unknown";
}





// Avoid Number, String, and Boolean as Objects
// Always treat numbers, strings, or booleans as primitive values. Not as objects.

// Declaring these types as objects, slows down execution speed, and produces nasty side effects:

// Example
let x = "John";             
let y = new String("John");
(x === y) // is false because x is a string and y is an object.
// Or even worse:

// Example
let x = new String("John");             
let y = new String("John");
(x == y) // is false because you cannot compare objects.
// Avoid Using eval()
// The eval() function is used to run text as code. In almost all cases, it should not be necessary to use it.

// Because it allows arbitrary code to be run, it also represents a security problem.





// JavaScript Common Mistakes


// Confusing Addition & Concatenation
// Addition is about adding numbers.

// Concatenation is about adding strings.

// In JavaScript both operations use the same + operator.

// Because of this, adding a number as a number will produce a different result from adding a number as a string:

let x = 10;
x = 10 + 5;       // Now x is 15

let y = 10;
y += "5";        // Now y is "105"
// When adding two variables, it can be difficult to anticipate the result:

let xa = 10;
let ya = 5;
let za = xa + ya;     // Now z is 15

let xb = 10;
let yb = "5";
let zb = xb + yb;     // Now z is "105"


// Misunderstanding Floats
// All numbers in JavaScript /are stored as 64-bits Floating point numbers (Floats).

// All programming languages, including JavaScript, have difficulties with precise floating point values:

let xc = 0.1;
let yc = 0.2;
let zc = xc + yc            // the result in z will not be 0.3
// To solve the problem above, it helps to multiply and divide:

Example
let zd = (xc * 10 + yc * 10) / 10;       // z will be 0.3




// JavaScript Performance


// Reduce DOM Access
// Accessing the HTML DOM is very slow, compared to other JavaScript statements.

// If you expect to access a DOM element several times, access it once, and use it as a local variable:

// Example
const obj = document.getElementById("demo");
obj.innerHTML = "Hello";


// Reduce DOM Size
// Keep the number of elements in the HTML DOM small.

// This will always improve page loading, and speed up rendering (page display), especially on smaller devices.

// Every attempt to search the DOM (like getElementsByTagName) will benefit from a smaller DOM.

// Avoid Unnecessary Variables
// Don't create new variables if you don't plan to save values.

// Often you can replace code like this:

let fullName = firstName + " " + lastName;
document.getElementById("demo").innerHTML = fullName;
// With this:

document.getElementById("demo").innerHTML = firstName + " " + lastName;





// Avoid Using with
// Avoid using the with keyword. It has a negative effect on speed. It also clutters up JavaScript scopes.

// The with keyword is not allowed in strict mode.

