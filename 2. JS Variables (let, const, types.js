// JavaScript Variables

// Variables = Data Containers
// JavaScript variables are containers for data.

// JavaScript variables can be declared in 4 ways:

// Modern JavaScript
// Using let
// Using const
// Older JavaScript
// Using var (Not Recommended)
// Automatically (Not Recommended)


// Example using let
let x = 5;
let y = 6;
let z = x + y;

// Example using const
const x1 = 5;
const y1 = 6;
const z1 = x1 + y1;

// From the examples you can guess:

// x contains (or stores) the value 5
// y contains (or stores) the value 6
// z contains (or stores) the value 11


// Variables are labels for data values.

// Variables are containers for storing data.




// JavaScript Identifiers
// Variables are identified with unique names called identifiers.

// Names can be short like x, y, z.

// Names can be descriptive age, sum, carName.

// The rules for constructing names (identifiers) are:

// Names can contain letters, digits, underscores, and dollar signs.
// Names must begin with a letter, a $ sign or an underscore (_).
// Names are case sensitive (X is different from x).
// Reserved words (JavaScript keywords) cannot be used as names.


// Note
// Numbers are not allowed as the first character in names.

// This way JavaScript can easily distinguish identifiers from numbers.



// JavaScript Underscore (_)
// JavaScript treats underscore as a letter.

// Identifiers containing _ are valid variable names:

// Example
let _lastName = "Johnson";
let _x = 2;
let _100 = 5;



// JavaScript Dollar Sign $
// JavaScript also treats a dollar sign as a letter.

// Identifiers containing $ are valid variable names:

// Example
let $ = "Hello World";
let $$$ = 2;
let $myMoney = 5;




// When to Use var, let, or const?
// 1. Always declare variables

// 2. Always use const if the value should not be changed

// 3. Always use const if the type should not be changed (Arrays and Objects)

// 4. Only use let if you cannot use const

// 5. Never use var if you can use let or const.




// JavaScript Data Types
// JavaScript variables can hold 8 datatypes, but for now, just think of numbers and strings.

// Strings are text written inside quotes.

// Numbers are written without quotes.

// If you put a number in quotes, it will be treated as a text string.

// Example
const pi = 3.14;
let person = "John Doe";
let answer = 'Yes I am!';



// One Statement, Many Variables
// You can declare many variables in one statement.

// Start the statement with let or constand separate the variables by comma:

// Example
// let person = "John Doe", carName = "Volvo", price = 200;
// A declaration can span multiple lines:

// Example
let person1 = "John Doe",
carName = "Volvo",
price = 200;





// The Assignment Operator
// In JavaScript, the equal sign (=) is an assignment operator, not an equal to operator.

// This is different from algebra. The following does not make sense in algebra:

// x = x + 5
// In JavaScript, however, it makes perfect sense: it assigns the value of x + 5 to x.

// (It calculates the value of x + 5 and puts the result into x. The value of x is incremented by 5.)

// Note
// The equal to operator is written like == in JavaScript.





// JavaScript Arithmetic
// As with algebra, you can do arithmetic with JavaScript variables, using operators like = and +:

// Example
// let x = 5 + 2 + 3;
// You can also add strings, but strings will be concatenated:

// Example
// let x = "John" + " " + "Doe";
