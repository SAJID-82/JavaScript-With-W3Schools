// JavaScript Math Object
// The Math Object
// The JavaScript Math object allows you to perform mathematical tasks.

// The Math object is static.

// All methods and properties can be used without creating a Math object first.

// Math.PI;
// Math Properties (Constants)
// The syntax for any Math property is : Math.property.

// JavaScript provides 8 mathematical constants that can be accessed as Math properties:

// Example
// Math.E        // returns Euler's number
// Math.PI       // returns PI
// Math.SQRT2    // returns the square root of 2
// Math.SQRT1_2  // returns the square root of 1/2
// Math.LN2      // returns the natural logarithm of 2
// Math.LN10     // returns the natural logarithm of 10
// Math.LOG2E    // returns base 2 logarithm of E
// Math.LOG10E   // returns base 10 logarithm of E






// Math Methods
// The syntax for Math any methods is : Math.method(number)

// Number to Integer
// There are 4 common methods to round a number to an integer:

// Math.round(x)	Returns x rounded to its nearest integer
// Math.ceil(x)	Returns x rounded up to its nearest integer
// Math.floor(x)	Returns x rounded down to its nearest integer
// Math.trunc(x)	Returns the integer part of x (new in ES6)



// Math.round()
// Math.round(x) returns the nearest integer:

// Examples

console.log("Math.round() method")
console.log(Math.round(4.6));
console.log(Math.round(4.5));
console.log(Math.round(4.4));



// Math.ceil()
// Math.ceil(x) returns the value of x rounded up to its nearest integer:

// Example
console.log("Math.ceil() method");
console.log(Math.ceil(4.9));
console.log(Math.ceil(4.7));
console.log(Math.ceil(4.4));
console.log(Math.ceil(4.2));
console.log(Math.ceil(-4.2));


// Math.floor()
// Math.floor(x) returns the value of x rounded down to its nearest integer:

// Example

console.log("Math.floor() method");
console.log(Math.floor(4.9));
console.log(Math.floor(4.7));
console.log(Math.floor(4.4));
console.log(Math.floor(4.2));
console.log(Math.floor(-4.2));






// Math.trunc()
// Math.trunc(x) returns the integer part of x:

// Example
console.log("Math.trunc() method")
console.log(Math.trunc(4.9));
console.log(Math.trunc(4.7));
console.log(Math.trunc(4.4));
console.log(Math.trunc(4.2));
console.log(Math.trunc(-4.2));



// Math.sign()
// Math.sign(x) returns if x is negative, null or positive.

// If x is positive it returns 1
// If x is negative it returns -1
// If x is zero, it returns 0
console.log(Math.sign(-4), Math.sign(0), Math.sign(4));

// Math.trunc() and Math.sign() were added to JavaScript 2015 - ES6.





// Math.pow()
// Math.pow(x, y) returns the value of x to the power of y:

// Example
console.log(Math.pow(8, 2));



// Math.sqrt()
// Math.sqrt(x) returns the square root of x:

// Example
console.log(Math.sqrt(64))



// Math.abs()
// Math.abs(x) returns the absolute (positive) value of x:

// Example
console.log(Math.abs(-4.7));




// Math.sin()
// Math.sin(x) returns the sine (a value between -1 and 1) of the angle x (given in radians).

// If you want to use degrees instead of radians, you have to convert degrees to radians:

// Angle in radians = Angle in degrees x PI / 180.

// Example
console.log(Math.sin(90 * Math.PI / 180))     // returns 1 (the sine of 90 degrees)







// Math.cos()
// Math.cos(x) returns the cosine (a value between -1 and 1) of the angle x (given in radians).

// If you want to use degrees instead of radians, you have to convert degrees to radians:

// Angle in radians = Angle in degrees x PI / 180.

// Example
console.log(Math.cos(0 * Math.PI / 180));     // returns 1 (the cos of 0 degrees)




// Math.min() and Math.max()
// Math.min() and Math.max() can be used to find the lowest or highest value in a list of arguments:

// Example

console.log(Math.min(0, 150, 30, 20, -8, -200));
console.log(Math.max(0, 150, 30, 20, -8, -200));



// Math.random()
// Math.random() returns a random number between 0 (inclusive), and 1 (exclusive):

// Example
console.log(Math.random());



// The Math.log() Method
// Math.log(x) returns the natural logarithm of x.

// The natural logarithm returns the time needed to reach a certain level of growth:

// Examples
console.log(Math.log(1));
console.log(Math.log(2));
console.log(Math.log(3));
console.log(Math.log(10));

// Math.E and Math.log() are twins.




// The Math.log2() Method
// Math.log2(x) returns the base 2 logarithm of x.

// How many times must we multiply 2 to get 8?

console.log(Math.log2(8));



// The Math.log10() Method
// Math.log10(x) returns the base 10 logarithm of x.

// How many times must we multiply 10 to get 1000?

console.log(Math.log10(1000));










// JavaScript Math Reference
// Complete Math Reference

// Name                        Description
// abs(x)                      Returns the absolute value of x
// acos(x)                     Returns the arccosine of x, in radians
// acosh(x)                    Returns the hyperbolic arccosine of x
// asin(x)                     Returns the arcsine of x, in radians
// asinh(x)                    Returns the hyperbolic arcsine of x
// atan(x)                     Returns the arctangent of x as a numeric value between -PI/2 and PI/2 radians
// atan2(y, x)                 Returns the arctangent of the quotient of its arguments
// atanh(x)                    Returns the hyperbolic arctangent of x
// cbrt(x)                     Returns the cubic root of x
// ceil(x)                     Returns x, rounded upwards to the nearest integer
// clz32(x)                    Returns the number of leading zeros in a 32-bit binary representation of x
// cos(x)                      Returns the cosine of x (x is in radians)
// cosh(x)                     Returns the hyperbolic cosine of x
// E                           Returns Euler's number (approx. 2.718)
// exp(x)                      Returns the value of Ex
// expm1(x)                    Returns the value of Ex minus 1
// f16round(x)                 Returns x, rounded downwards to the nearest integer
// floor(x)                    Returns x, rounded downwards to the nearest integer
// fround(x)                   Returns the nearest (32-bit single precision) float representation of a number
// LN2                         Returns the natural logarithm of 2 (approx. 0.693)
// LN10                        Returns the natural logarithm of 10 (approx. 2.302)
// log(x)                      Returns the natural logarithmof x
// log10(x)                    Returns the base-10 logarithm of x
// LOG10E                      Returns the base-10 logarithm of E (approx. 0.434)
// log1p(x)                    Returns the natural logarithm of 1 + x
// log2(x)                     Returns the base-2 logarithm of x
// LOG2E                       Returns the base-2 logarithm of E (approx. 1.442)
// max(x1,x2,..)               Returns the number with the highest value
// min(x1,x2,..)               Returns the number with the lowest value
// PI                          Returns PI (approx. 3.14)
// pow(x, y)                   Returns the value of x to the power of y
// random()                    Returns a random number between 0 and 1
// round(x)                    Rounds x to the nearest integer
// sign(x)                     Returns the sign of a number (checks whether it is positive, negative or zero)
// sin(x)                      Returns the sine of x (x is in radians)
// sinh(x)                     Returns the hyperbolic sine of x
// sqrt(x)                     Returns the square root of x
// SQRT1_2                     Returns the square root of 1/2 (approx. 0.707)
// SQRT2                       Returns the square root of 2 (approx. 1.414)
// tan(x)                      Returns the tangent of an angle
// tanh(x)                     Returns the hyperbolic tangent of a number
// trunc(x)                    Returns the integer part of a number (x)





// JavaScript Random
// Example
// Returns a random number:
// Math.random();
// JavaScript Math.random()
// Math.random() returns a random number between 0 (inclusive),  and 1 (exclusive):

// Math.random() always returns a number lower than 1.

// JavaScript Random Integers
// Math.random() used with Math.floor() can be used to return random integers.

// Note
// There is no such thing as JavaScript integers.

// We are talking about numbers with no decimals here.

// Example

// Return a random integer from 0 to 9 (both included):
Math.floor(Math.random() * 10);
// Explained:

// Math.random() returns a floating-point number between 0 (inclusive) and 1 (exclusive).

// Example outputs: 0.0, 0.237, 0.9999, but never 1.

Math.random() * 10 // gives a range from 0 up to but not including 10.

// Example possible results: 0.0, 3.5, 9.99, etc.

// Math.floor() rounds a number down to the nearest whole integer:

// 3.5 becomes 3
// 9.99 becomes 9
// 0.1 becomes 0
// The possible integer results are then 0 through 9 (both inclusive).


// In other words, the range is [0, 9].


// Example
// Return a random integer from 0 to 10 (both included):
Math.floor(Math.random() * 11);

// Example
// Return a random integer from 0 to 99 (both included):
Math.floor(Math.random() * 100);

// Example
// Return a random integer from 0 to 100 (both included):
Math.floor(Math.random() * 101);

// Example
// Return a random integer between 1 and 10 (both included):
Math.floor(Math.random() * 10) + 1;
// Explained:

// Math.random() returns a number from 0 (inclusive) up to but not including 1.

// Multiplying by 10 gives a number from 0 up to but not including 10.

// Adding 1 shifts that range to 1 up to but not including 11.

// Math.floor() then rounds down, so you get an integer between 1 and 10.

// Example
// Returns a random integer from 1 to 100 (both included):
Math.floor(Math.random() * 100) + 1;


// Summary
// Expression	Range from	Range to
// Math.random()	0	<1
// Math.random() * 10	0	<10
// Math.random() * 100	0	<100
// Math.floor(Math.random() * 10)	0	9


// A Proper Random Function
// As you can see from the examples above, it might be a good idea to create a proper random function to use for all random integer purposes.

// This JavaScript function always returns a random integer between min (included) and max (excluded):

// Example
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}

// This JavaScript function always returns a random integer between min and max (both included):

// Example
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}
