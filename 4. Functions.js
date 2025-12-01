// What are Functions?
// Functions are fundamental building blocks in all programming.

// Functions are reusable block of code designed to perform a particular task.

// Functions are executed when they are "called" or "invoked".

// JavaScript Function Syntax 

function name( p1, p2 ) {
  // code to be executed
}

// Functions are defined with the function keyword:

// followed by the function name
// followed by parentheses ( )
// followed by brackets { }
// The function name follows the naming rules for variables.

// Optional parameters are listed inside parentheses: ( p1, p2, ... )

// Code to be executed is listed inside curly brackets: { }

// Functions can return an optional value back to the caller.



// Why Functions?
// Functions enable better code organization and efficiency.

// With functions you can reuse code.

// You can write code that can be used many times.

// You can use the same code with different arguments, to produce different results.





// Function Invocation ()
// The code inside the function will execute when "something" invokes (calls) the function:

// When it is invoked (called) from JavaScript code
// When an event occurs (a user clicks a button)
// Automatically (self invoked)
// The () operator invokes a the function.

// Example
// toCelsius() invokes the toCelsius funnction:

// Convert Fahrenheit to Celsius:
function toCelsius(fahrenheit) {
  return (5/9) * (fahrenheit-32);
}

// Call the toCelcius() function
let value = toCelsius(77);






// Arrow Functions
// Arrow functions were introduced in ES6.

// Arrow functions allow us to write shorter function syntax:

// Before Arrow:
// Function to compute the product of a and b

let myFunction1 = function(a, b) {return a * b}

// With Arrow
let myFunction2 = (a, b) => a * b;



















// Function Parameters and Arguments
// Earlier in this tutorial, you learned that functions can have parameters:

function functionName(parameter1, parameter2, parameter3) {
  // code to be executed
}
// Function parameters are the names listed in the function definition.

// Function arguments are the real values passed to (and received by) the function.

// Parameter Rules
// JavaScript function definitions do not specify data types for parameters.

// JavaScript functions do not perform type checking on the passed arguments.
// 
// JavaScript functions do not check the number of arguments received.

// Default Parameters
// If a function is called with missing arguments (less than declared), the missing values are set to undefined.

// Sometimes this is acceptable, but sometimes it is better to assign a default value to the parameter:

// Example
function myFunction(x, y) {
  if (y === undefined) {
    y = 2;
  }
}
// Default Parameter Values
// ES6 allows function parameters to have default values.

// Example
// If y is not passed or undefined, then y = 10.

function myFunction(x, y = 10) {
  return x + y;
}
myFunction(5);
// Function Rest Parameter
// The rest parameter (...) allows a function to treat an indefinite number of arguments as an array:

Example
function sum(...args) {
  let sum = 0;
  for (let arg of args) sum += arg;
  return sum;
}

let x = sum(4, 9, 16, 25, 29, 100, 66, 77);


// The Arguments Object
// JavaScript functions have a built-in object called the arguments object.

// The argument object contains an array of the arguments used when the function was called (invoked).

// This way you can simply use a function to find (for instance) the highest value in a list of numbers:

// Example
x = findMax(1, 123, 500, 115, 44, 88);

function findMax() {
  let max = -Infinity;
  for (let i = 0; i < arguments.length; i++) {
    if (arguments[i] > max) {
      max = arguments[i];
    }
  }
  return max;
}
// Or create a function to sum all input values:

// Example
x = sumAll(1, 123, 500, 115, 44, 88);

function sumAll() {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}
// If a function is called with too many arguments (more than declared), these arguments can be reached using the arguments object.

// Arguments are Passed by Value
// The parameters, in a function call, are the function's arguments.

// JavaScript arguments are passed by value: The function only gets to know the values, not the argument's locations.

// If a function changes an argument's value, it does not change the parameter's original value.

// Changes to arguments are not visible (reflected) outside the function.

// Objects are Passed by Reference
// In JavaScript, object references are values.

// Because of this, objects will behave like they are passed by reference:

// If a function changes an object property, it changes the original value.

// Changes to object properties are visible (reflected) outside the function.