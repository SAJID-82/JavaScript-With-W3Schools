// JavaScript Maps
// The Map Object
// A Map object holds key-value pairs where the keys can be any datatype.

// A Map also remembers the original insertion order of the keys.


// How to Create a Map
// You can create a JavaScript Map by:

// Passing an Array to new Map()
// Create a Map and use Map.set()
// The new Map() Method
// You can create a Map by passing an Array to the new Map() constructor:

// Example
// Create a Map
const fruits1 = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200]
]);

console.log(fruits1);



// The set() Method
// You can add elements to a Map with the set() method:

// Example
// Create a Map
const fruits2 = new Map();

// Set Map Values
fruits2.set("apples", 500);
fruits2.set("bananas", 300);
fruits2.set("oranges", 200);
// The set() method can also be used to change existing Map values:

// Example
fruits2.set("apples", 200);
// The get() Method
// The get() method gets the value of a key in a Map:

// Example
fruits2.get("apples");    // Returns 500

console.log(fruits2);




// JavaScript Objects vs Maps
// Differences between JavaScript Objects and Maps:

// Object	                               Map
// Not directly iterable	               Directly iterable
// Do not have a size property	           Have a size property
// Keys must be Strings (or Symbols)	   Keys can be any datatype
// Keys are not well ordered	           Keys are ordered by insertion
// Have default keys	                   Do not have default keys




















// JavaScript WeakMap
// The WeakMap Object
// A JavaScript WeakMap is a collection of key/value pairs where the keys must be objects.

// A WeakMap holds weak references to its keys.

// Example
// Create a WeakMap
let myMapp = new WeakMap();

// Create an Object
let myObjj = {fname:"John", lname:"Doe"};

// Set a WeakMap value
myMapp.set(myObjj, "player");

// Get the WeakMap value
let type = myMapp.get(myObjj);


// Garbage Collection
// JavaScript employs a memory management mechanism known as Garbage Collection.

// The primary functions are:

// Ensuring efficient use of memory resources
// Reclaim memory occupied by variables that are no longer in use
// Preventing memory leaks
// Weak References
// Unlike a regular Map, a WeakMap does not prevent its keys from being garbage collected.

// If a key (an object) has no references to it in a program, it becomes eligible for garbage collection.

// When the key is garbage collected, its key-value pair is removed from the WeakMap.

// Example
let myMap = new WeakMap();
let myObj = {fname:"John", lname:"Doe"};

myMap.set(myObj, "secret");
myObj = null;
// now myObj (and its values) in myMap can be garbage collected
// Keys Must Be Objects
// Primitive values cannot be used as keys in a WeakMap.

// The keys must be objects or non-registered symbols.

// This restriction is tied to the garbage collection mechanism; primitives are not garbage collected in the same way as objects.

// Tracking Objects
// The entries in a WeakMap are weakly held: if the object key becomes unreachable, its mapping is removed automatically.

// This is perfect for tracking data about objects without preventing garbage collection.

// Tracking Visitors
let text = "";

// Create a WeakMap to store visit counts
const visitsCount = new WeakMap();

// Create Visitor Objects
let John = {name:"John", age:40};
let Paul = {name:"Paul", age:41};
let Ringo = {name:"Ringo", age:42};
let George = {name:"George", age:43};

// Track visits
track(Paul);
track(Ringo);
track(Paul);
track(Paul);
track(John);

// Function to track visitors
function track(visitor) {
  let count = visitsCount.get(visitor) || 0;
  count++;
  visitsCount.set(visitor, count);
  text += visitor.name + ", age " + visitor.age + ", has visited " + count + " time(s).<br>";
}

// Automatic Cleanup
// If you remove all references to a visitor object:

// Tracking Visitors:
John = null;

// The entry for John is now removed from the WeakMap (persons)




// Not Iterable
// WeakMaps are not enumerable.

// You cannot iterate over the keys and values with for loops, forEach(), or keys().

// You cannot access the size.

// Limited Methods
// WeakMap provides a limited set of methods:

// new WeakMap()	Creates a new WeakMap object
// get(key)	Gets the value for a key in a WeakMap
// set(key, value)	Sets the value for a key in a WeakMap
// delete(key)	Removes an element specified by a key
// has(key)	Returns true if a key exists in a WeakMap







// JavaScript Map Reference
// Method	      -         Description
// new Map()      -         Creates a new Map object
// clear()	      -         Removes all the elements from a Map
// delete()	      -         Removes a Map element specified by a key
// entries()      -         Returns an iterator object with the [key, value] pairs in a Map
// forEach()      -         Invokes a callback for each key/value pair in a Map
// get()	      -         Gets the value for a key in a Map
// groupBy()      -         Groups object elements according to returned callback values
// has()	      -         Returns true if a key exists in a Map
// keys()	      -         Returns an iterator object with the keys in a Map
// set() 	      -         Sets the value for a key in a Map
// size	          -         Returns the number of Map elements
// values()	      -         Returns an iterator object of the values in a Map