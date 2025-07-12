//! # Shallow Copy and Deep Copy

//?Shallow Copy
//Copies only the first level of the object.
//Nested objects / arrays are still referenced, not copied.
//Changes to nested values affect the original.

//?Deep Copy
//Copies all levels of an object.
//Fully independent copy.
//Changes in copy do not affect original.


//?Real - World Example Use Cases

//?Shallow Copy:
// When you create a shallow copy of an object, the top - level properties get a new reference.So, if you change a top - level property(like changing the name from "Ajay" to "Vijay"), that change will not affect the original object.However, if you change a nested property(like changing the city inside an address object), the original object will reflect that change because the nested properties share the same reference.

//?Shallow Copy in React:
//  When you create a shallow copy of a state object and update a top - level property, React detects that the reference has changed.This triggers a re - render, and the UI updates accordingly.However, if you change a nested property in a shallow copy, React might not detect that change automatically since the nested reference remains the same.

//?Deep Copy:
//  When you create a deep copy of an object, every level of the object gets its own new reference.This means that any change you make, whether it's a top-level property or a nested property, will not affect the original object at all. Each part of the copied object is completely independent from the original.

//?Deep Copy in React:
// When you make a deep copy of a state object, every part of the object has a new reference.This means any change, whether it's top-level or nested, will be detected by React, ensuring that the UI updates as expected.

//?How the both copy works
//- Every object has some memory reference where they store object
//- in shallow the copy object(shallowCopy) use the same memory reference which original object use .so when chnage in originalobject happen it affects on shallowCopy object too
//- in deep copy the original object and deepcopy object both refer to different memory reference thats why the change of original was not reflect on deepcopy object 

//?Example-1

const originalObject = {
    name: "ajay",
    address: { city: "delhi" },
};


//? point is to make copy of this object there is total two way to copy object

//?1st Way
// const shallowCopy = Object.assign({}, originalObject);

//?2nd Way
// const shallowCopy = { ...originalObject };

// const deepCopy = JSON.stringify(originalObject) //make object into string
const deepCopy = JSON.parse(JSON.stringify(originalObject)) //make string into copy object

//?Let chnage something in original
originalObject.address.city = "Mumbai";


// console.log(deepCopy.address.city) //?delhi
// console.log(shallowCopy.address.city) //?Mumbai

//!----------------------------------------------------------------------------------------------------------------------------------


//! 1-This Method Drawbacks

/*
| ❌ Limitation                     | 💬 Explanation                                   |
| ---------------------------------- | -------------------------------------------------  |
| ❌ Functions are lost             | Functions inside the object are not preserved.    |
| ❌ Dates become strings           | `Date` objects turn into strings.                 |
| ❌ `undefined`, `Infinity`, `NaN` | These are lost or misrepresented.                 |
| ❌ Circular references break it   | If object refers to itself, this throws an error. |
*/


//! 2-little explaintion on deepcopy cloned object

//? JSON.stringify(originalObject)
/*
 Purpose: Converts the object into a JSON - formatted string.
 Result: A string like:
 CODE
'{"name":"Dipesh","age":25,"address":{"city":"Surat","state":"Gujarat"}}'
 Type: String
 This step serializes the object — turns it into a plain text representation.
*/

//? JSON.parse(...)
/*
Purpose: Parses the JSON string back into a new JavaScript object.
Input: The string from JSON.stringify(...).
Output: A new object with the same structure and values as the original.
CODE
JSON.parse(JSON.stringify(originalObject))
Return a new deeply clone object

*/

//!3-top level in shallow copy => copy by value not reference

//?CODE
/*
const copy = { ...originalObject };
originalObject.name = "vijay"
console.log(copy); //?Nothing Chnage
*/

//?Explaination
/*
Top-level properties (name, address) are copied by value if they're primitives, or by reference if they're obj
 2. name is a primitive string

originalObject.name = "chnage";
This updates the original object’s name, but the copy.name still points to the original "ajay" because it's a primitive value — copied by value.

3. address is an object:
The nested address object is copied by reference, not value.
So if you do:
originalObject.address.city = "mumbai";
Then copy.address.city will also be "mumbai" — because both originalObject.address and copy.address refer to the same object in memory.

*/


//!4- what happen when object made Behind the scene

//?CODE

// const originObj = {
//     fname: "Dipesh",
//     address: {
//         city: "delhi",
//         pincode: 110011,
//     },
// }

//?Expalin
//- whenever a object made it need memory space


//?stack
//- the variable obj store in stack memory.but it doesn't contain full object - it stores a reference(memory address) point to the actual object in the heap memory

//?Heap
//- the actual object {name,address} stores in the heap.
//- {name:"ajay"} is primitive,stored directly inside the object in the heap
//- address is another object, so its stored separately in the heap,and the main object holds the refenrce of it

//?Notes
// - inside the address object
// - city:"Delhi" and pincode:110011 are both primitives values
// - these primitives are stored directly inside the object
// - they do not have their own seprated refernces

//?So there is separate refernce for city and pincode
// - no there is one refernce for entire address object
// - Both city and pincode are part of that object - they are not stored separately and dont have indvidual reference

// let name = "Ajay";
//- since ajay is primitive datatype and not part of any object---itsjust a varaible--->  directly store in stack memory

// - name = "Vijay"
// - then a new primitive "vijay" is created and store in the stack
// - name now point to a vijay
// - 'Ajay' Variable is garbage if no variable is pointing to it


