// Typed Arrays
// Typed arrays was designed for handling Binary Data.

// Unlike arrays, typed arrays are buffers of Fixed Length.

// Typed arrays store elements of Fixed Types like 8-bit integers or 32-bit numbers.


// Typed Array Benefits
// Typed Arrays were designed to provide an efficient way to handle binary data, unlike traditional JavaScript arrays which can hold elements of mixed data types.

// Typed arrays are raw memory, so JavaScript can pass them directly to any function without converting the data to another representation.

// Typed arrays are seriously faster than normal arrays for passing data to functions that can use raw binary data. Typed Arrays are highly suitable for:

// WebGL and Canvas:
// Fast graphics rendering and image processing.

// File APIs:
// Fast reading and writing of local files.

// Media APIs:
// Fast handling of audio and video data.

// WebSockets:
// Efficient binary data transfer over network.

// Typed Arrays were introduced to JavaScript as part of the ECMAScript 2015 (ES6) specification, released in June 2015.







// Differences from Regular Arrays
// Fixed Length:
// Typed Arrays cannot be dynamically resized using methods like push() or pop().

// Type Restriction:
// Elements must adhere to the specified data type of the typed array.

// Underlying Buffer:
// Typed Arrays are views into an ArrayBuffer, allowing direct manipulation of binary data.







// Typed Array Types

// Name	                   Range	                 Type

// Int8Array	           -128 / 127	         1 byte signed integer

// Uint8Array	           0 / 255	             1 byte unsigned integer

// Uint8ClampedArray	   0 / 255	             1 byte unsigned integer

// Int16Array	           -32768 / 32767	     2 bytes signed short

// Uint16Array	           0 / 65535	         2 bytes unsigned short

// Int32Array	           -231 / 231 - 1	     4 bytes signed long

// Uint32Array	           0 / 232 - 1	         4 bytes unsigned long

// BigInt64Array	       -263 / 263 - 1	     8 bytes signed big integer

// BigUint64Array	       0 / 264 - 1	         8 bytes unsigned big integer

// Float16Array	          -65504 / 65504	         2 bytes floating point

// Float32Array	          -3.4e38 / 3.4e38	         4 bytes floating point

// Float64Array	          -1.8e308 / 1.8e308	     8 bytes floating point








// Typed Array Methods
// Method	               -      Description

// at()	               -      Returns one indexed element from a typed array

// byteLength	           -      Returns the length (in bytes) of a typed array.

// byteOffset	           -      Returns the offset (in bytes) of a typed array from the start of its ArrayBuffer

// BYTES_PER_ELEMENT      -      Returns the number of bytes used to store one element in a typed array

// copyWithin()	       -      Copies array elements to another position in the array

// entries()	           -      Returns an iterator object with the key/value pairs from the array

// every()	               -      Executes a function for each typed array element

// fill()	               -      Fill all array elements with a value

// filter()	           -      Returns a new array filled with elements that pass a test

// find()      	       -      Returns the first element that satisfies a condition

// findIndex()	           -      Returns the index of the first element that satisfies a condition

// findLast()	           -      Returns the last element that satisfies a condition

// findLastIndex()	       -      Returns the index of the last element that satisfies a condition

// forEach()	           -      Executes a function for each typed array element

// from()	               -      Returns a typed array from any object with a length property

// includes()	           -      Returns true if an array includes a specified value

// indexOf()	           -      Returns the first index (position) of a specified value

// join()	               -      Returns the elements of an array as a string

// keys()	               -      Returns the keys of a typed array

// lastIndexOf()	       -      Returns the last index (position) of a specified value

// length	               -      Returns the lenth of the typed array

// map()	               -      Returns a new array from calling a function for every array element

// name	               -      Returns the name of the typed array

// of()	               -      Returns a new typed array from an existing array

// reduce()	           -      Reduce the values of an array to a single value

// reduceRight()	       -      Reduce the values of an array to a single value (right-to-left)

// reverse()	           -      Reverses a typed array in place

// set()	               -      Stores values in a typed array from another array

// slice()	               -      Reurns a new typed array sliced out of a typed array

// some()	               -      Reurns true if one element satisfies a condition

// sort()	               -      Sorts an array in place

// subarray()	           -      Returns a subarray in the same memory space

// toLocaleString()       -      Returns all elements converted with their toLocaleString methods

// toReversed()           -      Reverses an array into a new array.

// toSorted()	           -      Sorts an array into a new array.

// toString()	           -      Returns a string of all typed array elements

// values()	           -      Returns an iterator object with the values of an typed array

// with()	               -      Returns a new typed array with an updated array element
