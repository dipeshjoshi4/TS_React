
//!1
//? obj = { 1: "one", "07": "zero-seven", "01": "zero-one", 10: "ten", "02": "two" }
// console.log(Object.keys(obj)); //asscending order : first integer and then string => comes in string format only
// console.log(obj == Object.keys(obj)); //false

//?✔ JavaScript object key rules:

// - here 2 values will be string like "02" is a string , "2"/2 are integer
//- Numbers become strings.
//- Integer - looking keys are sorted automatically.
//- Other strings keep original order.

//!2
//?Old Bug in 1995
//  console.log(typeof null);
//object // - its a bug in js and its still same to protect old implementation

//!3
//?type of coherction
// console.log("5" * "4");  //20-Number
// console.log("10" - "3"); // 7-Number
// console.log("6" / "2");  // 3-Number
// console.log("2" ** "3"); // 8-Number

//?Not Applicable on +
// console.log("5" + "4"); // 54
// console.log(typeof ("5" + "4")); //string

//!4
//?Spread Operator
// console.log([...[..."123"]].length); //3

//?Break Down
// console.log([..."123"]); //["1","2","3"]
// console.log([...[..."123"]]); //["1","2","3]

//!5

//?Array-reference is the same so the both a and b point to the one box
// let a = [1, 2, 3];
// let b = a;
// b.push(4)
// console.log(a); //[1,2,3]
// console.log(b); //[1,2,3]

//?if you want to copy them then

//?1
// let a = [1, 2, 3];
// let b = [...a];
// b.push(4)
// console.log(a); //[1,2,3]
// console.log(b); //[1,2,3,4]

//?2
// let a = [1, 2, 3];
// let b = a.slice();
// b.push(4)
// console.log(a); //[1,2,3]
// console.log(b); //[1,2,3,4]

//?3
// let a = [1, 2, 3];
// let b = structuredClone(a)
// b.push(4)
// console.log(a); //[1,2,3]
// console.log(b); //[1,2,3,4]

//!6
// console.log(typeof typeof 1); //string
// console.log(typeof 1); //Number
// - 1 -> Number -> String

//!7
// var obj = { a: 1 }
// const obj2 = obj
// obj2.a = 2;
// console.log(obj.a); //2
//- memory reference same so

//?For Real copy
//?1
// var obj = { a: 1 }
// const obj2 = { ...obj };
// obj2.a = 2;
// console.log(obj.a); //1
// console.log(obj2.a); //2

//?2
// var obj = { a: 1 }
// const obj2 = Object.assign({}, obj);
// obj2.a = 2;
// console.log(obj.a); //1
// console.log(obj2.a); //2

//!8


