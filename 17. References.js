// JavaScript Statements

// Statement Identifiers

// JavaScript statements start with a statement identifier to
// identify the action to be performed.

// Statement identifiers are reserved 
// words (cannot be used as variable names or any other things).


// Complete Statements Reference

// Statement	              -       Description
// { }	                      -       Creates an block of statements
// async function	          -       Creates an AsyncFunction object
// async function*	          -       Creates an AsyncGeneratorFunction object
// await using	              -       Declares local variables that are asynchronously disposed
// break	                  -       Exits a switch or a loop
// class	                  -       Declares a class
// const	                  -       Declares a variable with a constant value
// continue	                  -       Breaks one iteration (in the loop) if a specified condition occurs, and continues with the next iteration in the loop
// debugger	                  -       Stops the execution of JavaScript, and calls (if available) the debugging function
// do...while                 -       Executes a block of statements and repeats the block while a condition is true
// for	Loops                 -       through a block of code a number of times
// for...in	                  -       Loops through the properties of an object
// for...of	                  -       Loops through the values of an iterable object
// for await...of	          -       Loops over async iterable objects
// function	                  -       Declares a function
// function*	              -       Creates a GeneratorFunction object
// if...else...else if	      -       Marks a block of statements to be executed depending on a condition
// import	                  -       Defines a read-only import of a module
// import attributes	      -       Defines how a module should be loaded
// let	                      -       Declares a variable
// return	                  -       Stops the execution of a function (and returns a value)
// switch	                  -       Marks a block of statements to be executed depending on different cases
// throw	                  -       Throws (generates) an error
// try...catch...finally      -       Marks the block of statements to be executed when an error occurs in a try block, and implements error handling
// using	                  -       Declares local variables that are synchronously disposed
// var	                      -       Declares a variable
// while	                  -       Marks a block of statements to be executed while a condition is true






// JavaScript Reserved Words

// In JavaScript you cannot use these reserved words as variables, labels, or function names:

// abstract
// arguments
// async *
// await *
// boolean	
// break	
// byte	
// case
// catch	
// char	
// class *
// const *
// continue
// debugger
// default
// delete
// do
// double
// else
// enum *
// eval
// export *
// extends *
// false
// final
// finally
// float
// for
// function
// goto
// if
// implements
// function
// import *
// in
// instanceof
// int
// interface
// let *
// long
// native
// new	
// null	
// package
// private	
// protected	
// public	
// return
// short	
// static	
// super *	
// switch
// synchronized
// this
// throw
// throws
// transient
// true
// try
// typeof
// using *
// var
// void
// volatile
// while
// with
// yield


// Note
// Words marked with* have been added to JavaScript from after 2015.

// You can read more the newest JavaScript versions in JS News 2025-2015.

// Removed Reserved Words
// The following reserved words was removed from the ECMAScript 5/6 standard:

// abstract
// boolean
// byte
// char
// double
// final
// float
// goto
// int
// long
// native
// short
// synchronized
// throws
// transient
// volatile

// JavaScript Objects, Properties, and Methods
// You should also avoid using the name of JavaScript built-in objects, properties, and methods:

// Array
// Date
// eval
// function
// hasOwnProperty
// Infinity
// isFinite
// isNaN
// isPrototypeOf
// length
// Math
// NaN
// name
// Number
// Object
// prototype
// String
// toString
// undefined
// valueOf


// Java Reserved Words
// JavaScript is often used together with Java. You should avoid using some Java objects and properties as JavaScript identifiers:

// getClass
// java
// JavaArray
// javaClass
// JavaObject
// JavaPackage	



// Other Reserved Words
// JavaScript can be used as the programming language in many applications.

// You should also avoid using the name of HTML and Window objects and properties:

// alert
// all
// anchor
// anchors
// area
// assign
// blur
// button
// checkbox
// clearInterval
// clearTimeout
// clientInformation
// close
// closed
// confirm
// constructor
// crypto
// decodeURI
// decodeURIComponent
// defaultStatus
// document
// element	
// elements	
// embed
// embeds
// encodeURI	
// encodeURIComponent	
// escape
// event
// fileUpload	
// focus	
// form
// forms	
// frame	
// innerHeight	
// innerWidth
// layer	
// layers	
// link	
// location
// mimeTypes
// navigate
// navigator
// frames
// frameRate
// hidden
// history	
// image
// images	
// offscreenBuffering	
// open	
// opener
// option	
// outerHeight	
// outerWidth	
// packages
// pageXOffset	
// pageYOffset	
// parent	
// parseFloat
// parseInt	
// password	
// pkcs11	
// plugin
// prompt	
// propertyIsEnum	
// radio	
// reset
// screenX	
// screenY	
// scroll	
// secure
// select	
// self	
// setInterval	
// setTimeout
// status	
// submit	
// taint	
// text
// textarea	
// top
// unescape
// untaint
// window			



// HTML Event Handlers
// In addition you should avoid using the name of all HTML event handlers.

// Examples:

// onblur	
// onclick
// onerror	
// onfocus
// onkeydown	
// onkeypress	
// onkeyup	
// onmouseover
// onload	
// onmouseup	
// onmousedown	
// onsubmit





// JavaScript Operators Reference
// Complete Operators Reference

// Type	        Common Use	                                      Example

// Assignment	Assigns values to variables	                      x = 5
// Arithmetic	Performs arithmetic between variables	          x = y + 2
// Comparison	Compares variables	                              x > 8
// Logical	    Defines the logic between variables	              (x>0 || x>0)
// Bitwise	    Performs bitwise operatins on 32 bits numbers	  x = 5 & 1
// Misc	        Miscellaneous operators	                          void(0)



// JavaScript Assignment Operators
// Assignment operators assign values to JavaScript variables.

// Given that x = 10 and y = 5, the table below explains the assignment operators:

// Oper	    Name / Link	   Example	   Same As	    Result
// =	    Simple	       x = y	   x = y	    x = 5
// +=	    Add	           x += y	   x = x + y	x = 15
// -=	    Subtract	   x -= y	   x = x - y	x = 5
// *=	    Multiply	   x *= y	   x = x * y	x = 50
// /=	    Divide 	       x /= y	   x = x / y	x = 2
// %=	    Remainder	   x %= y	   x = x % y	x = 0
// :	    Colon	       x: 45	   x = 45	    x = 45




// Logical Assignment Operators

// Oper	    Name / Link	     Example	        Result
// &&=	    AND	             true &&= 10	    x = 10
// ||=	    OR	             false ||= 10	    x = 10
// ??=	    Nullish	         null ??= 10	    x = 10





// JavaScript Arithmetic Operators
// Arithmetic operators are used to perform arithmetic between variables and/or values.

// Given that y = 5, the table below explains the arithmetic operators:

// Oper	    Name / Link	       Example	    Results
// +	    Addition	       x = y + 2	y=5, x=7
// -	    Subtraction	       x = y - 2	y=5, x=3
// *	    Multiplication	   x=y*2	    y=5, x=10
// /	    Division	       x = y / 2	y=5, x=2.5
// **	    Exponentiation	   x = y ** 2	y=5, x=25
// %	    Remainder	       x = y % 2	y=5, x=1
// ++	    Increment	       x = y++    	y=6, x=5
// ++	    Increment	       x = ++y	    y=6, x=6
// --	    Decrement	       x = y--	    y=4, x=5
// --	    Decrement	       x = --y	    y=4, x=4
// +	    Unary Plus	       x= +y 	    x=5
// -	    Unary Negation	   x= -y 	    x=-5



// JavaScript String Operators
// The + operator, and the += operator can also be used to concatenate (add) strings.

// Given that t1 = "Good ", t2 = "Morning", and t3 = "", the table below explains the operators:

// Oper	    Example	        t1	            t2	         t3
// +	    t3 = t1 + t2	"Good"	        "Morning"	 "Good Morning"	
// +=	    t1 += t2	    "Good Morning"	"Morning"	







// Javascript Comparison Operators
// Comparison operators are used in logical statements to determine equality or difference between variables or values.

// Given that x = 5, the table below explains the comparison operators:

// Oper	Name / Link	        Comparing	   Returns
// ==	Equal to	        x == 8	       false
// ==	Equal to	        x == 5	       true
// ===	Strict Equal        x === "5"	   false
// ===	Strict Equal        x === 5	       true
// !=	Not Equal	        x != 8	       true
// !==	Strict not Equal	x !== "5"	   true
// !==	Strict not Equal	x !== 5	       false
// >	Greater than	    x > 8	       false
// <	Less than	        x < 8	       true
// >=	Greater or Equal	x >= 8	       false
// <=	Less or Equal	    x <= 8	       true

// Learn More:
// Study our JavaScript Comparisons Tutorial.

// JavaScript Logical Operators
// Logical operators are used to determine the logic between variables or values.

// Given that x = 6 and y = 3, the table below explains the logical operators:

// Oper	      Name / Link	            Example
// &&	      AND	                    (x < 10 && y > 1)
// ||	      OR	                    (x === 5 || y === 5)
// !	      NOT	                    !(x === y)
// ??	      Nullish Coalescing	    x ?? y




// JavaScript Bitwise Operators
// Bit operators work on 32 bits numbers. Any numeric operand in the operation is converted into a 32 bit number. The result is converted back to a JavaScript number.

// Oper	Name	        Example	    Same as	        Result	  Dec
// &	AND	            x = 5 & 1	0101 & 0001	    0001	  1
// |	OR	            x = 5 | 1	0101 | 0001	    0101	  5
// ~	NOT	            x = ~ 5	    ~0101	        1010	  10
// ^	XOR	            x = 5 ^ 1	0101 ^ 0001	    0100	  4
// <<	Left Shift	    x = 5 << 1	0101 << 1	    1010	  10
// >>>	Right Shift	    x = 5 >>> 1	0101 >>> 1	    0010	  2
// >>	Signed Right	x = 5 >> 1	0101 >> 1	    0010	  2





// Miscellaneous JavaScript Operators
// Some miscellaneous JavaScript operators are described below.

// Operator	    Name / Link	           Example
// :	        Colon	               age : 45
// .	        Member of	           person.age
// [ ]	        Member of	           person["age"]
// ?.	        Optional Chaining	   x ?. y
// ...	        Spread	               ...myArray
// ( ) ? x : y	Ternary Conditional	   (z < 18) ? x : y
// ( )	        Expression	           ( x + y )
// ( )	        Function Call	       myFunction()
// =>	        Arrow Function	       (a, b) => a + b
// new	        Constructor	           new Date()
// delete	    Delete	               delete person.age
// in	        Relational in	       "age" in person
// instanceof	Instance of	           x instanceof Array
// typeof	    Type of	               typeof "John"
// void	        Void	               void(0)
// yield	    Delegate	           yield.x









// Operator Precedence Values
// Expressions in parentheses are computed before the rest of the expression
// Function are executed before the result is used in the rest of the expression

// Val	  Operator	  Description	Example

// 18	   ( )	        Expression Grouping	(100 + 50) * 3
// 17	   .	        Member Of	person.name
// 17	   []	        Member Of	person["name"]
// 17	   ?.	        Optional Chaining ES2020	x ?. y
// 17	   ()	        Function Call	myFunction()
// 17	   new	        New with Arguments	new Date("June 5,2022")
// 16	   new	        New without Arguments	new Date()

// Increment Operators
// Postfix increments are executed before prefix increments

// 15	   ++	        Postfix Increment	i++
// 15	   --	        Postfix Decrement	i--
// 14	   ++	        Prefix Increment	++i
// 14	   --	        Prefix Decrement	--i

// NOT Operators

// 14	   !	        Logical NOT	!(x==y)
// 14	   ~	        Bitwise NOT	~x

// Unary Operators

// 14	   +	    Unary Plus	       +x
// 14	   -	    Unary Minus	       -x
// 14	   typeof	Data Type	       typeof x
// 14	   void	    Evaluate Void	   void(0)
// 14	   delete	Property Delete	   delete myCar.color



// Arithmetic Operators
// Exponentiations are executed before multiplications
// Multiplications and divisions are executed before additions and subtractions

// 13	   **	    Exponentiation ES2016	10 ** 2
// 12	   *	    Multiplication	        10 * 5
// 12	   /	    Division	            10 / 5
// 12	   %	    Division Remainder	    10 % 5
// 11	   +	    Addition	            10 + 5
// 11	   -	    Subtraction	            10 - 5
// 11	   +	    Concatenation	        "John" + "Doe"



// Shift Operators
// 10	<<	         Shift Left	              x << 2
// 10	>>	         Shift Right (signed)	  x >> 2
// 10	>>>	         Shift Right (unsigned)	  x >>> 2

// Relational Operators
// 9	in	           Property in Object	        "PI" in Math
// 9	instanceof	   Instance of Object	         x instanceof Array


// Comparison Operators
// 9	<	        Less than	            x < y 
// 9	<=	        Less than or equal	    x <= y
// 9	>	        Greater than	        x > y
// 9	>=	        Greater than or equal	x >= Array
// 8	==	        Equal	                x == y
// 8	===	        Strict equal	        x === y
// 8	!=	        Unequal	                x != y
// 8	!==	        Strict unequal	        x !== y

// Bitwise Operators
// 7	&	        Bitwise AND	            x & y
// 6	^	        Bitwise XOR	            x ^ y
// 5	|	        Bitwise OR	            x | y

// Logical Operators
// 4	&&	        Logical AND	                x && y
// 3	||	        Logical OR	                x || y
// 3	??	        Nullish Coalescing ES2020	x ?? y

// Conditional (ternary) Operator
// 2	? :	Condition	? "yes" : "no"





// Assignment Operators
// Assignments are executed after other operations

// Val  Operator    Description                    Example

// 2	=	        Simple Assignment	           x = y
// 2	:	        Colon Assignment	           x: 5
// 2	+=	        Addition Assignment	           x += y
// 2	-=	        Subtraction Assignment	       x -= y
// 2	*=	        Multiplication Assignment	   x *= y
// 2	**=	        Exponentiation Assignment	   x **= y
// 2	/=	        Division Assignment	           x /= y
// 2	%=	        Remainder Assignment	       x %= y
// 2	<<=	        Left Shift Assignment	       x <<= y
// 2	>>=	        Right Shift Assignment	       x >>= y
// 2	>>>=	    Unsigned Right Shift	       x >>>= y
// 2	&=	        Bitwise AND Assignment	       x &= y
// 2	|=	        Bitwise OR Assignment	       x |= y
// 2	^=	        Bitwise XOR Assignment	       x ^= y
// 2	&&=	        Logical AND Assignment	       x &&= y
// 2	||=	        Logical OR Assignment	       x ||= y
// 2	=>	        Arrow	                       x => y
// 2	yield	    Pause / Resume	               yield x
// 2	yield*	    Delegate	                   yield* x
// 2	...	        Spread	                       ... x
// 1	,	        Comma	                       x , y