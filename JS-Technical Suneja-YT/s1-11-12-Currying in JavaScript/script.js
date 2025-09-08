console.log("Currying in JavaScript");

//----------------------Currying Function in JavaScript

//Normal Case
// function add(a, b, c) {
//   return a + b + c;
// }
// let result = add(2, 3, 4);
// console.log(result);

//another way of writing function using closure concept
// function add(a) {
//   return function (b) {
//     return function (c) {
//       return a + b + c;
//     };
//   };
// }
// let res0 = add(2);
// let res1 = res0(4);
// let res2 = res1(7);
// console.log(res2);

//writing above thing as currying function

// function add(a) {
//   return function (b) {
//     return function (c) {
//       return a + b + c;
//     };
//   };
// }

// let res = add(2)(4)(7);
// console.log(res);

//-------------------------------reallife use case of currying-----------------------

// let userObj = {
//   name: "ajay",
//   age: 28,
//   sname: "joshi",
// };
// function userInfo(obj) {
//   return function (userInfo) {
//     return obj[userInfo];
//   };
// }

// let res = userInfo(userObj);
// console.log(res("name"));
// console.log(res("age"));

//-------------------------------Infinite of currying in js-----------------------

//Manully taking the value for infinite currying

// function add(a) {
//   return function (b) {
//     return function (c) {
//       return function () {
//         return a + b + c;
//       };
//     };
//   };
// }

// console.log(add(4)(5)(7)());

//Automate infinite currying

function add(a) {
  return function (b) {
    if (b) return add(a + b);
    return a;
  };
}

console.log(add(4)(5)(7)(8)());

//let assume that function-a return whole function-b and then we put condition a is x and b is y then addition and make that a
//so every new value is become b
