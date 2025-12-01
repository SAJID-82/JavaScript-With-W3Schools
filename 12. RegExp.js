// Regular Expressions
// A Regular Expression is a sequence of characters that forms a search pattern.

// Regex is a common shorthand for a regular expression.

// JavaScript RexExp is an Object for handling Regular Expressions.

// RegExp are be used for:

// Text searching
// Text replacing
// Text validation


// Example
// Do a case-insensitive search for "w3schools" in a string:

let text = "Visit W3Schools";
let n = text.search(/w3schools/i);;
console.log(n)

// Example explained:

// /w3schools/i  is a regular expression.

// w3schools  is a pattern (to be used in a search).

// i  is a modifier (modifies the search to be case-insensitive).

// Regular Expression Syntax
// /pattern/modifier flags'




// Using String Methods
// Regular expressions are often used with the string methods:

// Method	           Description
// match(regex)	       Returns an Array of results
// replace(regex)	   Returns a new String
// search(regex)	   Returns the index of the first match



// Using String match()

// Search for "W3schools" in a string:

let text1 = "Visit W3Schools";
let n1 = text1.match(/W3schools/);

console.log(n1);


// Using String replace()

// Replace Microsoft with W3Schools in a string:

let text2 = "Visit Microsoft!";
let result2 = text2.replace(/Microsoft/i, "W3Schools");

console.log(result2);


// Using String search()

// Search for "W3Schools" in a string:

let text3 = "Visit W3Schools";
let n3 = text3.search(/W3Schools/);


console.log(n3);




// RexExp Alteration (OR)
// In a regular expression an alteration is denoted with a vertical line character |.

// An alteration matches any of the alternatives separated with |.

// Example
// A global search for the alternatives (red|green|blue):

let text4 = "Black, white, red, green, blue, yellow.";

let result4 = text4.match(/red|green|blue/g);

console.log(result4);



// JavaScript Regex Flags
// /pattern/flags
// Regular expression flags are parameters that can modify how a pattern is used, such as making it case-insensitive or global.

// These are the most common:

// Flag    Description
// /g	   Performs a global match (find all)
// /i	   Performs case-insensitive matching
// /u	   Enables Unicode support (new 2015)



// The /g Flag (Global)
// The /g flag matches all occurrences of the pattern, rather than just the first one.

// Example
// A global search for "is" in a string:

let text5 = "Is this all there is?";
const pattern5 = /is/g;

let result5 = text5.match(pattern5);

console.log(result5);





// The /i Flag (Insensitive)
// The /i flag makes a match case-insensitive: /abc/i matches "abc", "AbC", "ABC".

// Example
// A case-insensitive search for "w3schools" in a string:

let text6 = "Visit W3Schools";
const pattern6 = /w3schools/i;
let result6 = text6.match(pattern6);

console.log(result6);








// RexExp Metacharacters
// Match words
// const pattern = /\w/;
// Metacharacters are characters with a special meaning.

// They can be used to match digts, words, spaces, and more.

// These are the most common:

// Meta	    Description
// \d	    Matches Digits
// \w	    Matches Words
// \s	    Matches Spaces



// RegExp \d (digits) Metacharacter
// The \d metacharacter matches digits.

// Example
// A global search for digits in a string:

let text7 = "Give 100%!";
const pattern7 = /\d/g;

let result7 = text7.match(pattern7);

console.log(result7);






// RegExp \w (word) Metacharacter
// The \w metacharacter matches word characters.

// A word character is a character a-z, A-Z, 0-9, including _ (underscore).

// Example
// A global search for word characters:

let text8 = "Give 100%!";
const pattern8 = /\w/g;

let result8 = text8.match(pattern8);

console.log(result8);







// JavaScript RegExp Quantifiers
// Match at least one zero
// const pattern = /0+/;
// Quantifiers define the numbers of characters or expressions to match.

// These are the most common:

// Code	   Description
// x*	   Matches zero or more occurrences of x
// x?	   Matches zero or one occurrences of x
// x{n}	   Matches n occurences of x


// The n? Quantifier
// x? matches zero or one occurrences of x.

// Example
// A global search for "1", followed by zero or more "0" characters:

let text9 = "1, 100 or 1000?";
const pattern9 = /10?/g;

let result9 = text9.match(pattern9);

console.log(result9)





// Regular Expression Assertions
// Match beginning of string
// const pattern = /^W3Schools/;

// Match end of string
// const pattern = /W3Schools$/;
// Assertions matches Boundaries and Lookarounds:

// String Boundaries and Word Boundaries.

// Lookarounds: Lookaheads and Lookbehinds.

// These are the most common:

// Syntax	  Name	                Description
// ^	      String boundary	    Matches the beginning of a string
// $	      String boundary	    Matches the end of a string
// \b	      Word boundary	        Matches the beginning or end of a word
// (?=...)	  Lookahead	            Matches the subsequent string
// (?<=...)	  Lookbehin/d	        Matches the previous string



// RegExp ^ Metacharacter
// The ^ metacharacter matches the beginning of a string.

// Examples
// Test if a string starts with W3Schools:

const pattern10 = /^W3Schools/;
let text10 = "W3Schools Tutorial";

let result10 = pattern10.test(text10); // true

console.log(result10);

const pattern11 = /^W3Schools/;
let text11 = "Hello W3Schools";

let result11 = pattern11.test(text11); // false

console.log(result11);





// RegExp $ Metacharacter
// The $ metacharacter matches the end of a string.

// Test if a string ends with W3Schools:

const pattern12 = /W3Schools$/;
let text12 = "Hello W3Schools";

let result12 = pattern12.test(text12); // true

console.log(result12);

const pattern13 = /W3Schools$/;
let text13 = "W3Schools tutorial";

let result13 = pattern13.test(text13); // false

console.log(result13);




// JavaScript RegExp Character Classes
// Match Digits
// const pattern = /[0-9]/;
// Character Classes are characters enclosed in square brackets [].

// A character class matches any character from a set within brackets.

// These are the most common:

// Class	Description
// [a]	Matches the character between the brackets
// [abc]	Matches all characters between the brackets
// [a-z]	Matches all characters in the range from a to z
// [0-9]	Matches all characters in the range from 0 to 9
// Example [0-9]
// A global search for the characters "0" to "9" in a string:

let text14 = "More than 1000 times";
const pattern14 = /[0-9]/g;

let result14 = text14.match(pattern14);

console.log(result14);





// // JavaScript RegExp Flags
// RegExp Modifier Flags
// Flags are parameters that can modify how a regex pattern is used, such as making it case-insensitive or global.

// /pattern/flags
// JavaScript Regex Flags

// Flag	            Description
// /d	            Performs substring matches (new 2022)
// /g	            Performs a global match (find all)
// /i	            Performs case-insensitive matching
// /m	            Performs multiline matching
// /s	            Allows . (dot) to match line terminators (new 2018)
// /u	            Enables Unicode support (new 2015)
// /v	            An upgrade to the /u flag for better Unicode support (new 2025)
// /y	            Performs a "sticky" search (new 2015)




// String Methods
// Method	             Description
// match(regex)	         Returns an Array of results
// matchAll(regex)	     Returns an Iterator of results
// replace(regex)	     Returns a new String
// replaceAll(regex)	 Returns a new String
// search(regex)	     Returns the index of the first match
// split(regex)	         Returns an Array of results


// RegExp Methods
// Method	             Description
// regex.exec()	         Returns an Iterator of results
// regex.test()	         Returns true or false






// RegExp Character Classes
// Character Classes are characters enclosed in square brackets [].

// A character class matches any character from a set within brackets:

// Match Digits
// const pattern = /[0-9]/;
// JavaScript Regex Character Classes

// Class	Description
// [a]	    Matches the character between the brackets
// [^a]	    Matches all characters NOT between the brackets
// [abc]	Matches all characters between the brackets
// [^abc]	Matches all characters NOT between the brackets
// [a-z]	Matches all characters in the range from a to z
// [^a-z]	Matches all characters NOT in the range from a to z
// [0-9]	Matches all characters in the range from 0 to 9
// [^0-9]	Matches all characters NOT in the range from 0 to 9





// JavaScript Regex Metacharacters

// Meta	            Description
// \d	            Matches Digits
// \D	            Matches None Digits
// \w	            Matches alphanumeric Word characters
// \W	            Matches None alphanumeric Word characters
// \s	            Matches Spaces
// \S	            Matches None Spaces
// \ddd	            Matches characters by the Octal numer ddd
// \xhh	            Matches characters by the HexadecimaL number hh
// \uhhhh	        Matches Unicode characters by the hex number hhhh





// RegExp Assertions
// Assertions matches Boundaries and Lookarounds:

// String Boundaries and Word Boundaries.

// Lookarounds: Lookaheads and Lookbehinds.

// // Match beginning of string
// const pattern = /^W3Schools/;

// // Match end of string
// const pattern = /W3Schools$/;
// JavaScript Regex Assertions

// Syntax        Name	            Description
// ^	         String boundary	Matches the beginning of a string
// $	         String boundary	Matches the end of a string
// \b	         Word boundary	    Matches the beginning or end of a word
// \B	         Word boundary	    Matches NOT the beginning or end of a word
// (?=...)       Lookahead	        Matches the subsequent string
// (?!...)       Lookahead	        Matches NOT the subsequent string
// (?<=...)      Lookbehind	        Matches the previous string
// (?<!...)      Lookbehind	        Matches NOT the previous string













// RegExp Quantifiers
// Quantifiers define the numbers of characters or expressions to match.

// Match at least one zero
// const pattern = /0+/;
// JavaScript RexExp Quantifiers

// Code	       Description
// x+	       Matches at least one x
// x*	       Matches zero or more occurrences of x
// x?	       Matches zero or one occurrences of x
// x{n}	       Matches n occurences of x
// x{n,m}	   Matches from n to m occurences of x
// x{n,}	   Matches n or more occurences of x




// RexExp Quantifiers
// Quantifiers indicate the numbers of characters or expressions to match:

// Code	       Description
// x+	       Matches at least one x
// x*	       Matches zero or more occurrences of x
// x?	       Matches zero or one occurrences of x
// x{n}	       Matches n occurences of x
// x{n,m}	   Matches from n to m occurences of x
// x{n,}	   Matches n or more occurences of x








// The RegExp Object
// In JavaScript, RegExp is a regular expression object with predefined properties and methods.

// Using test()
// The test() method is a RegExp expression method.

// It searches a string for a pattern, and returns true or false, depending on the result.

// The following example searches a string for the character "e":

// Example
// const pattern = /e/;
// pattern.test("The best things in life are free!");
// Since there is an "e" in the string, the output of the code above will be:

// true

// You don't have to put the regular expression in a variable first. The two lines above can be shortened to one:

// /e/.test("The best things in life are free!");
// Using exec()
// The exec() method is a RegExp expression method.

// It searches a string for a specified pattern, and returns the found text as an object.

// If no match is found, it returns an empty (null) object.

// The following example searches a string for the character "e":

// Example
// /e/.exec("The best things in life are free!");
// The RegExp.escape() Method
// The RegExp.escape() method returns string where characters that belongs to the regular expression syntax are escaped.

// This makes it possible to treat characters like +, *, ?, ^, $, (, ), [, ], {, }, |, and \ literally, and not as part of a regular expression.

// Example
// Create a regular expression that matches the string "[*]":

// // Escape a text for to use as a regular expression
// const safe = RegExp.escape("[*]";

// // Build a new reglar expression
// const regex = new RegExp(safe);

// // Text to replace within
// const oldText = "[*] is a web school.";

// // Perform the replace
// const newText = oldText.match(regex, "W3Schools");
