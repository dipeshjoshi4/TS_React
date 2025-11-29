//----------|| Technical Suneja----------//Set Object ,Includes, Some, Reduce, Find, FindIndex--------------

//--------------------------------------------//Use cases---------------------------------------------------

//1.check users with same name exists
//2.adding elment to the array
//3.remove duplicates element in array
//4.concating the array

//what we can learn through this ? =>setObject,include(),some(),push(),reduce(),find(),findIndex(),concat()

const users = [
  {
    id: 1,
    name: "Ajay",
    isActive: true,
    age: 20,
  },
  {
    id: 2,
    name: "Akash",
    isActive: true,
    age: 18,
  },
  {
    id: 3,
    name: "Fraz",
    isActive: true,
    age: 34,
  },
  {
    id: 4,
    name: "vipin",
    isActive: false,
    age: 30,
  },
];

//------------------QUESTION-1-check users with same name exists---------------------------------------

//Level 0 Solution
// const isNameExist = (name, users) => {
//   let exit = false;
//   for (let i = 0; i < users.length; i++) {
//     if (users[i].name === name) {
//       exit = true;
//     }
//   }
//   return exit;
// };

//Level 1 Solution
// const isNameExist = (name, users) => {
//   const user = users.find((user) => user.name === name);
//   return Boolean(user);
// };

//Level 2 Solution
// const isNameExist = (name, users) => {
//   const IndexUser = users.findIndex((user) => user.name === name);
//   return IndexUser >= 0;
// };

//Level 3 Solution
// const isNameExist = (name, user) => {
//   const someUser = users.some((user) => user.name === name);
//   return someUser;
// };

//------------------QUESTION-2-adding an element to the array---------------------------------------

//Level 0 Solution
// const arr = [1, 2];
// const append = (arr, ele) => {
//   arr.push(ele);
//   return arr;
// };
// const newArr = append(arr, 3);
// console.log(newArr); //[1,2,3]
// console.log(arr); //[1,2,3]

//Here problem is the Push method that always modify new array that we dont want

// Level-1-Solution
// const arr = [1, 2];
// const append = (arr, ele) => {
//   return [...arr, ele];
// };
// console.log(append(arr, 3)); //[1,2,3]
// console.log(arr); //[1,2]

//---------------------------------------//NOTES--------------------------------------
//the set object is built in js data structure that allows you to store unique value of any type
//the spread operator is used to expand the array into individual arguments
//the includes method is used to check if it already exists in the unique elements array.if it does not then put it and if it have then dont put in
//reduce( ) method iterative method (smart)

//------------------QUESTION-3-remove duplicates element in array----------------------------------------------------

//Level-0-Solution
// const arr = [1, 2, 3, 3, 4, 4, 5];
// function uniqueArray() {
//   const uniqueElements = [];                 //empty uniquelement
//   arr.forEach((ele) => {
//     if (!uniqueElements.includes(ele)) {    //condition: if unique element not have then put if have then dont with help of include()
//       uniqueElements.push(ele);
//     }
//   });
//   return uniqueElements;
// }
// console.log(arr);
// console.log(uniqueArray(arr));

//Level-1-Solution
// const arr = [1, 2, 3, 3, 4, 4, 5];
// function uniqueArray(arr) {
//   //return [new Set(arr)]; ///first he give set of unique value in object at index 0
//   return [...new Set(arr)]; ///with spread operator thay give array atb unique index different
// }
// console.log(uniqueArray(arr));

//Level-2-Solution
// const arr = [1, 2, 3, 3, 4, 4, 5];
// const uniqueArray = (arr) => {
//   return arr.reduce((acc, ele) => {
//     return acc.includes(ele) ? acc : [...acc, ele];
//   }, []);
// };
// console.log(uniqueArray(arr));
// console.log(arr);

//------------------QUESTION-4-concatenating the array----------------------------------------------------

//Level-0-Solution
// const mergeArray = (arr1, arr2) => {
//   arr1.push(...arr2);
//   return arr1;
// };
// const arr1 = [1];
// const arr2 = [2, 3];
// const result = mergeArray(arr1, arr2);
// console.log(arr1, arr2, result); //1,2,3  || 2,3 ||1,2,3

//Level-1-Solution
// const mergeArray = (arr1, arr2) => {
//   return [...arr1, ...arr2];
// };
// const arr1 = [1];
// const arr2 = [2, 3];
// const result = mergeArray(arr1, arr2);
// console.log(arr1, arr2, result); // 1 || 2,3 || 1,2,3

//Level-2-Solution
// const mergeArray = (arr1, arr2) => {
//   return arr1.concat(...arr2);
// };
// const arr1 = [1];
// const arr2 = [2, 3];
// const result = mergeArray(arr1, arr2);
// console.log(arr1, arr2, result); // 1 || 2,3 || 1,2,3
