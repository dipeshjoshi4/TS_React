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
const shallowCopy = { ...originalObject };

// const deepCopy = JSON.stringify(originalObject) //make object into string
const deepCopy = JSON.parse(JSON.stringify(originalObject)) //make string into copy object

//?Let chnage something in original
originalObject.address.city = "Mumbai";


console.log(deepCopy.address.city) //delhi
console.log(shallowCopy.address.city) //Mumbai


//?little explaintion on deepcopy cloned object

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

//?This Method Drawbacks

/*
| ❌ Limitation                     | 💬 Explanation                                   |
| ---------------------------------- | -------------------------------------------------  |
| ❌ Functions are lost             | Functions inside the object are not preserved.    |
| ❌ Dates become strings           | `Date` objects turn into strings.                 |
| ❌ `undefined`, `Infinity`, `NaN` | These are lost or misrepresented.                 |
| ❌ Circular references break it   | If object refers to itself, this throws an error. |
*/