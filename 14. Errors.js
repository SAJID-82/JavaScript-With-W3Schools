// JavaScript Errors

// Errors Will Happen!
// When executing JavaScript code, different errors can occur.

// Errors can be coding errors made by the programmer, errors due to wrong input, and other unforeseeable things:

// Reference Errors
// Type Errors
// Range Errors
// URI Errors
// Syntax Errors
// Eval Error (deprecated)




// How to Handle JavaScript Errors
// The try statement allows you to define a block of code to be tested for errors while it is being executed.

// The catch statement allows you to define a block of code to be executed, if an error occurs in the try block.

// The JavaScript statements try and catch come in pairs:

// try {
//   Block of code to try
// } catch(err) {
//   Block of code to handle errors
// }




// Reference Errors
// A ReferenceError occurs if you use (reference) a variable that does not exist.

// Error Type	Example	Error
// ReferenceError	fname = foo;	foo is not defined
// ReferenceError	let x = y;
// let y = 5;	Cannot access y before initialization

let x = 5;

try {
  x = y + 1;
} catch(err) {
  let text = err.name;
  console.log(`Error - ${text}`)
}



// JavaScript Type Errors
// A Type Error occurs when a value is of the wrong type or an operation is invalid on that type.

// Error	Example	Error Message
// TypeError	Anna(5);	Anna is not a function
// Type Error	let num = 1;
// num.toUpperCase();
// num.toUpperCase is not a function

try {
  Anna(5);
} catch(err1) {
  let text1 = err1.name;
  console.log(`Error - ${text1}`);
}


// JavaScript Range Errors
// A RangeError occurs when a value is out of its valid range.

// Error Type	Example	Error Message
// RangeError	new Array(-1);	Invalid array length
// RangeError	num.toPrecision(500);	toPrecision() argument must be between 1 and 100

// Examples
// You cannot set the number of array elements to -1:

try {
new Array(-1);
} catch(err2) {
  let text2 = err2.name;
  console.log(`Error - ${text2}`);

}


// JavaScript URI Errors
// (Uniform Resource Identifier Errors)
// An URIError occurs if you use illegal characters in a URI function:

// Error Type	Example	Error Message
// URIError	decodeURI("%%%");	URI malformed

// Example
try {
  decodeURI("%%%");   // You cannot URI decode percent signs
} catch(err) {
    let text3 = err.name;
    console.log(`Error - ${text3}`)
}


// JavaScript Syntax Errors
// A Syntax Error occurs when the code violates JavaScript's grammar rules.

// Error	Example	Error
// SyntaxError	fname = "John);	Invalid or unexpected token )
// SyntaxError	Math.round(4.6;	Missing ) after argument list


// Example
// In this example we have made the mistake of not closing the string:

// This line cannot be parsed by JavaScript
// let fName = "John);

// Execution stops here
// The statement above will generate the error: Invalid or unexpected token

// Execution of the program will stop!


// Syntax Errors are Not Catchable
// Syntax errors are not catchable by try...catch
// Syntax errors happen before runtime



// JavaScript Eval Error
// An EvalError indicates an error in the eval() function.

// Newer versions of JavaScript do not throw EvalError.

// Use SyntaxError instead.




// JavaScript Silent Errors

// Silent Errors
// JavaScript can fail siently.

// A silent error will not stop your program. The execution will continue.

// The reason for silent errors is historical:

// The first version of JavaScript did not have catch...try exceptions.


// Example
// Assignment, not comparison

// let isActive = false;

// ❌ Assignment, not comparison
if (isActive = true) {
  let result = "Active!";
  console.log(result)
}

// Explanation
// The = assigns true instead of checking equality.

// The next line runs silently and prints "Active!", even though isActive is false.







// JavaScript Error Statements
// The try Statement
// In JavaScript, the try statement is used to handle errors (also called exceptions) that may occur during code execution - without stopping the entire program.

// The try statement works together with catch.

// Sometimes it works with finally.

// And sometimes it works with throw.


// Syntax
try {
  // Code that may cause an error
} catch (error) {
  // Code to handle the error
}


// The Try Block
// The try block contains the code that might throw an error.

// If no error occurs, the catch block is skipped.


// The Catch Block
// The catch block executes only if an error occurs in the try block.

// The error object provides details about what went wrong.

// The Finally Block (Optional)
// The finally block executes after the try and catch blocks, whether an error occurred or not.

// It is commonly used for cleanup tasks (e.g., closing files, stopping loaders, etc.).

// Syntax
try {
  // Code that may cause an error
} catch (error) {
  // Code to handle the error
} finally {
  // Code that always runs, no matter what
}


// The throw Statement
// The throw statement allows you to create a custom error.

// Technically you can throw an exception (throw an error).

// The exception can be a JavaScript String, a Number, a Boolean or an Object:

// throw "Too big";    // throw a text
// throw 500;          // throw a number
// If you use throw together with try and catch, you can control program flow and generate custom error messages.



// JavaScript Error Reference
// The Error Object
// JavaScript has a built in error object that provides error information when an error occurs.

// The error object provides two useful properties: name and message.


// Error Object Properties

// Property	 -  Description
// name	     -  Sets or returns an error name
// message	 -  Sets or returns an error message (a string)
