//! # Shallow Copy and Deep Copy

//?Shallow Copy
//Copies only the first level of the object.
//Nested objects / arrays are still referenced, not copied.
//Changes to nested values affect the original.

//?Deep Copy
//Copies all levels of an object.
//Fully independent copy.
//Changes in copy do not affect original.

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