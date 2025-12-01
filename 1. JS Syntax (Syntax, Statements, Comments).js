// JavaScript Syntax

// 1. Syntax rules
// Syntax are the rules how programs must be constructed:

// How to Declare variables:
let x = 5;
let y = 6;

// How to Compute values:
let z = x + y;

// I am Comment. I do Nothing


// 2. JavaScript Values
// The JavaScript syntax defines two types of values:

// a. Literal(Fixed values)
// b. Variables (Variable values)

// a. JS Literals
// The most important syntax rules for literals (fixed values) are:

// Numbers are written with or without decimals:

// Example

10.50
1001

// Strings are Text, written within double or single quotes:

//Example

"John Doe"
'John Doe'


// JavaScript Keywords
// JavaScript keywords are used to defines actions to be performed.
// The let and const keywords creative variables:

//Example
let x1 = 5;

const fname = "John";

// Note

// JavaScript keywords are case-sensitive.
// JavaScript does not interpret LET or Let as the keyword let.


// b. JavaScript Variables
// Variables are containers for storing data values.

// Variables must be identified with unique names.

// Example

// Define x as a variable
let x2;

// Assign the value 6 to x
x = 6;


// 3. JavaScript Identifiers
// An identifier is the name you give to a variable.

// Rules for identifiers:

// Must start with a letter, _, or $
// Can contain digits after the first character
// Cannot be a reserved keyword (let, const, if, etc.)
// Are case-sensitive


//  4. JavaScript Operators
// JavaScript assignment operators (=) assign values to variables:

// Example
let x3 = 5;
let y3 = 6;
let sum = x3 + y3;

// JavaScript uses arithmetic operators ( + - * / ) to compute values:

// Example
5 * 10 // for multiply


// 5. JavaScript Expressions
// An expression is a combination of values, variables, and operators, which computes to a value.

// Examples
(5 + 6) * 10 // evaluates to 110:

(5 + 6) * 10
// Expressions can also contain variable:

x * 10
"John" + " " + "Doe", //  evaluates to "John Doe":

"John" + " " + "Doe"



// 6. JavaScript is Case Sensitive
// JavaScript identifiers are case sensitive.

// The variables lastName and lastname, are different variables:

// Example
let lastName = "Doe";
let lastname = "Peterson";
// JavaScript and Camel Case
// Historically, programmers have used different ways of joining multiple words into one variable name:

// Hyphens:

// first-name, last-name, master-card, inter-city.

// Hyphens are not allowed in JavaScript. They are reserved for subtractions.

// Underscore:

// first_name, last_name, master_card, inter_city.

// Upper Camel Case (Pascal Case):

// FirstName, LastName, MasterCard, InterCity.


// Lower Camel Case:

// firstName, lastName, masterCard, interCity.

// JavaScript programmers tend to use lower camel case.



// JavaScript Statements


Example
let a, b, c;    // Statement 1
x = 5;          // Statement 2
y = 6;          // Statement 3
c = a + b;      // Statement 4


// JavaScript Programs
// A computer program is a list of "instructions" to be "executed" by a computer.

// These programming instructions are called statements.

// Most JavaScript programs contain many statements.

// The statements are executed, one by one, in the same order as they are written.

// Note
// In HTML, JavaScript programs are executed by the web browser.

// JavaScript Statements
// JavaScript statements are composed of:

// Values, Operators, Expressions, Keywords, and Comments.

// This statement tells the browser to write "Hello Dolly." inside an HTML element with id="demo":

// Example
// document.getElementById("demo").innerHTML = "Hello Dolly.";
// Note
// JavaScript programs (and JavaScript statements) are often called JavaScript code.

// Semicolons ;
// Semicolons separate JavaScript statements.

// Add a semicolon at the end of each executable statement:

// Examples
// let a, b, c;  // Declare 3 variables
// a = 5;        // Assign the value 5 to a
// b = 6;        // Assign the value 6 to b
// c = a + b;    // Assign the sum of a and b to c
// When separated by semicolons, multiple statements on one line are allowed:

// a = 5; b = 6; c = a + b;
// On the web, you might see examples without semicolons.
// Ending statements with semicolon is not required, but highly recommended.

// ADVERTISEMENT

// JavaScript White Space
// JavaScript ignores multiple spaces. You can add white space to your script to make it more readable.

// The following lines are equivalent:

// let person = "Hege";
// let person="Hege";
// A good practice is to put spaces around operators ( = + - * / ):

// let x = y + z;
// JavaScript Line Length and Line Breaks
// For best readability, programmers often like to avoid code lines longer than 80 characters.

// If a JavaScript statement does not fit on one line, the best place to break it is after an operator:

// Example
// document.getElementById("demo").innerHTML =
// "Hello Dolly!";
// JavaScript Code Blocks
// JavaScript statements can be grouped together in code blocks, inside curly brackets {...}.

// The purpose of code blocks is to define statements to be executed together.

// One place you will find statements grouped together in blocks, is in JavaScript functions:

// Example
// function myFunction() {
//   document.getElementById("demo1").innerHTML = "Hello Dolly!";
//   document.getElementById("demo2").innerHTML = "How are you?";
// }
// In this tutorial we use 2 spaces of indentation for code blocks.
// You will learn more about functions later in this tutorial.

// JavaScript Keywords
// JavaScript statements often start with a keyword to identify the JavaScript action to be performed.

// Our Reserved Words Reference lists all JavaScript keywords.

// Here is a list of some of the keywords you will learn about in this tutorial:

// Keyword	Description
// var	Declares a variable
// let	Declares a block variable
// const	Declares a block constant
// if	Marks a block of statements to be executed on a condition
// switch	Marks a block of statements to be executed in different cases
// for	Marks a block of statements to be executed in a loop
// function	Declares a function
// return	Exits a function
// try	Implements error handling to a block of statements
// Note
// JavaScript keywords are reserved words. Reserved words cannot be used as names for variables.





// JavaScript Comments

// Single Line Comments
// Single line comments start with //.
// 
// Any text between // and the end of the line will be ignored by JavaScript (will not be executed).

// This example uses a single-line comment before each code line:


// Multi-line Comments
// Multi-line comments start with /* and end with */.

// Any text between /* and */ will be ignored by JavaScript.

// This example uses a multi-line comment (a comment block) to explain the code: