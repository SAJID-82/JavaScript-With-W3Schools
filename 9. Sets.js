// JavaScript Sets
// A JavaScript Set is a collection of unique values.

// Each value can only occur once in a Set.

// The values can be of any type, primitive values or objects.



// How to Create a Set
// You can create a JavaScript Set by:

// Passing an array to new Set()
// Create an empty set and use add() to add values
// The new Set() Method
// Pass an array to the new Set() constructor:

// Example
// Create a Set
const letters = new Set(["a","b","c"]);
// Create a Set and add values:

// Example
// Create a Set
const letters1 = new Set();

// Add Values to the Set
letters.add("a");
letters.add("b");
letters.add("c");






//The union() Method
// The union() method returns the union of two sets.

// The union() method returns a new set containing the elements which are in this set, or in the argument set, or in both:

// Union

// Example
const A1 = new Set(['a','b','c']);
const B1 = new Set(['b','c','d']);

const C1 = A1.union(B1);




// The intersection() Method
// The intersection() method returns the intersection of two sets.

// The intersection() method returns a new set containing the elements which are in this set and in the argument set:

// Intersection

// Example
const A2 = new Set(['a','b','c']);
const B2 = new Set(['b','c','d']);

const C2 = A2.intersection(B2);





// The difference() Method
// The difference() method returns the difference between two sets.

// The difference() method returns a new set containing elements which are in this set but not in the argument set:

// Difference

// Example
const A3 = new Set(['a','b','c']);
const B3 = new Set(['b','c','d']);

const C3 = A3.difference(B3);






// The symmetricDifference() Method
// The symmetricDifference() method returns the symmetric difference between to sets.

// The symmetricDifference() method returns a new set containing elements which are in this set or in the argument set, but not in both:

// Symmetric Difference

// Example
const A4 = new Set(['a','b','c']);
const B4 = new Set(['b','c','d']);

// const C4 = A4.symetricDifference(B4);



// The isSubsetOf() Method
// The isSubsetOf() method returns true if all elements in this set is also elements in the argument set:

// Subset

// Example
const A5 = new Set(['a','b','c']);
const B5 = new Set(['b','c','d']);

let answer5 = A5.isSubsetOf(B5);




// The isSupersetOf() Method
// The isSupersetOf() method returns true if all elements in the argument set are also in this set:

// Superset

// Example
const A6 = new Set(['a','b','c']);
const B6 = new Set(['b','c','d']);

let answer6 = A6.isSupersetOf(B6);




// The isDisjointFrom() Method
// The isDisjointFrom() method returns true if this set has no elements in common with the argument set:

// Disjoint

// Example
const A7 = new Set(['a','b','c']);
const B7 = new Set(['b','c','d']);

let answer = A7.isDisjointFrom(B7);




// JavaScript WeakSet
// The WeakSet Object
// A JavaScript WeakSet is a collection of values where the values must be objects.

// A WeakSet holds weak references to its values.




// Examples
// Create a WeakSet
let mySet1 = new WeakSet();

// Create an Object
let myObj1 = {fname:"John", lname:"Doe"};

// Add the Object
mySet1.add(myObj1);

// Do I have myObj in the mySet?
let answer1 = mySet1.has(myObj1);

console.log(answer1);


// Create a WeakSet
let mySet2 = new WeakSet();

// Create an Object
let myObj2 = {fname:"John", lname:"Doe"};

// Add the Object
mySet2.add(myObj2);

// Delete the Object
mySet2.delete(myObj2);

// Do I have myObj in the mySet?
let answer2 = mySet2.has(myObj2);

console.log(answer2);







// Garbage Collection
// JavaScript employs a memory management mechanism known as Garbage Collection.

// The primary functiona are:

// Ensuring efficient use of memory resources
// Reclaim memory occupied by variables that are no longer in use
// Preventing memory leaks
// Weak References
// Unlike a regular Set, a WeakSet does not prevent its values from being garbage collected.

// If a value (an object) has no references in a program, it becomes eligible for garbage collection.

// When the value is garbage collected, its is removed from the WeakSet.





// Example
// Create a WeakSet
let mySet = new WeakSet();

// Create an Object
let myObj = {fname:"John", lname:"Doe"};

// Add the Object
mySet.add(myObj);

// Remove the Object from memory
myObj = null;

// Now myObj in mySet will be garbage collected





// Values Must Be Objects
// Primitive values cannot be values in a WeakSet.

// The values must be objects.

// This restriction is tied to the garbage collection mechanism; primitives are not garbage collected in the same way as objects.

// Tracking Objects
// A WeakSet is similar to a Set, but it only stores objects, and holds them weakly. If there are no other references to an object, it gets garbage collected automatically.

// This makes it handy for tracking objects without storing extra data (like counts).

// Tracking Visitors:
let text = "";

// Create a WeakSet to track persons
const persons = new WeakSet();

// Visitor Objects
const John = {name:"John", age:40};
const Paul = {name:"Paul", age:41};
const Ringo = {name:"Ringo", age:42};
const George = {name:"George", age:43};

// Track visits
track(John);
track(Paul);
track(Ringo);
track(Paul);

// Function to track visitors
function track(visitor) {
  if (persons.has(visitor)) {
    text += visitor.name + " is visiting again.<br>";
  } else {
    persons.add(visitor);
    text += visitor.name + ", age" + visitor.age +", is visiting for the first time<br>";
  }
}

document.writeln(text)








// Automatic Cleanup
// If you remove all references to a visitor object:

// Tracking Visitors:
// John = null;

// // The entry for John is now removed from the WeakMap (persons)
// Not Iterable
// WeakSets are not enumerable.

// You cannot iterate over the values with for loops, forEach(), or values().

// You cannot access the size. WeakSets have no size property.

// Limited Methods
// A WeakSet is minimal, memory-safe, and purpose-built for tracking objects privately and efficiently.

// WeakSet provides a limited set of methods:

// new WeakSet()	Creates a new WeakSet object
// add(object)	Adds an Object to a WeakSet
// delete(object)	Removes a WeakSet object
// has(object)	Returns true if an object exists in a WeakSet
// WeakSet does not have:

// A size property
// A spread operator (...)
// A clear() method
// Any logic methods (union, difference, intersection)
// Any iteration methods (forEach, keys, values, entries)
// The above is by design: Objects may disappear in garbage collection, it makes no sense to iterate over or count them.









// JavaScript Set Reference
// Sets Methods
// Method	                     Description
// new Set()                     Creates a new set
// add()	                     Adds a new element to a set
// clear()	                     Removes all elements from a set
// delete()	                     Removes an element from a set
// difference()	                 Returns the difference between two sets
// entries()	                 Returns an Iterator with the [value,value] pairs from a set
// forEach()	                 Invokes a callback for each element in a set
// has()	                     Returns true if a value exists
// intersection()	             Returns the intersection of two sets
// isDisjointFrom()	             Returns true if no elements in a set are elements in another set
// isSubsetOf()	                 Returns true if a set is a subset of another set
// isSupersetOf()	             Returns true if a set is a superset of another set
// keys()	                     Same as values()
// symmetricDifference()         Returns the symmetric difference between two set
// union()	                     Returns the union of two sets
// values()	                     Returns an Iterator with the values in a set


// Sets have only one property:
// Property	  Description
// size	      Returns the number of elements in a Set