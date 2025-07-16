//! Promise

// - now days we are not using promise direct we use libraray framwork but we can know that how promise bheind work
// - Promise is a way to handle asynchronous operation in javascript

//? What is a Promise in JavaScript ?

// ● A Promise is an object representing the eventual completion(or failure) of an asynchronous operation.
// ● Think of it as a placeholder for a value that is not available yet but will be in the future.

//?States of a Promise

// 1. Pending–Initialstate, neitherfulfillednorrejected.

// 2. Fulfilled–Operationcompletedsuccessfully.

// 3. Rejected–Operationfailedwithanerror.

//? a Promise in js as an object that represents the eventual completion(or failure)of an asynchronous operation and its resulting value

//Promise has 3 State
//1 Pending -opertion is still in progress
//2 fullfilled - operation completed successfully(resolved)
//3 rejected - operation failed (error occurred)

//?SYNTAX
/*
const myPromise = new Promise((resolve, reject) => {
    if (true) {
        resolve(" ")
    } else {
        reject(" ")
    }
})
myPromise.then((result) => {
        console.log(result)
}).catch(() => {
    
}).finally(() => {
    
})
*/
//some funtion in Promise is like => then use for repsonse and if its reject for that we use catch block
//result  =>  which we given in resolve
// catch  =>  if result not came then we use which we given in reject
//finally =>  if all good then we use

//?Example-1

/*
function foodOrder(isResturantOpen) {
    return new Promise((resolve,reject) => {
        console.log("placeing Order....")
        setTimeout(() => {
            if (isResturantOpen) {
                resolve("Order Recevied")
            } else {
                reject("Resrurant is Closed!")
            }
        },2000)
    })
}

foodOrder(false).then((res) => {
    console.log(res);
    return "Preparing Food!!1"
}).then((res) => {
    console.log(res);
    return "Out For Delievery"
}).then((res) => {
    console.log(res)
}).catch((error) => {
    console.log("Error!",error)
}).finally(() => {
    console.log("Thank You For Using Our Service")
})


*/

//?Example-2

/*

fetch('https://jsonplaceholder.typicode.com/todos/1').then((response) => {
    return response.json();

}).then((data) => {
    console.log(data)
}).catch((error) => {
    console.log(error)
}).finally(() => {
    console.log("promise in fetch ")
})
    
*/

//? ON RESOLVE => {userId:1,id:1,title:"delectus aut autem",completed:false}

//? ON REJECT => typeeror : invalid url(if url erase)

//?here fetch function it self using behind the scene promise so that we get resolve and reject and you can use finally too

//?Example-3
/*
function Shop(isShopOpen) {
    return new Promise((resolve, reject) => {

        console.log("Taking Grocery Order....")
        setTimeout(() => {
            if (isShopOpen) {
                resolve("Grocery Reserved")
            } else {
                reject("Shop Is Close")
            }
        }, 3000)

    })
}

Shop(true).then((res) => {
    console.log(res);
    return "Packing Grocery"
}).then((res) => {
    console.log(res);
    return "Grocery Out For Delivery"
}).then((res) => {
    console.log(res)
}).catch((error) => {
    console.log("Error!", error)
}).finally(() => {
    console.log("Thank You For Using Our Service")
})
    */

//?Example-4

//- Promise.all is method that take array pof promise and return new promise that resolves when all promises in the array resolve or rejects if any one promise in the array rejects.

// Assume 2 fetch function means 2 api calls and wait for both to resolve or reject

const fetchUser1 =
  fetch(
    'https://jsonplaceholder.typicode.com/todos/1'
  ).then(
    (response) =>
      response.json()
  );
const fetchUser2 =
  fetch(
    'https://jsonplaceholder.typicode.com/todos/2'
  ).then(
    (response) =>
      response.json()
  );
const fetchUser3 =
  fetch(
    'https://jsonplaceholder.typicode.com/todos/3'
  ).then(
    (response) =>
      response.json()
  );

Promise.all([fetchUser1, fetchUser2, fetchUser3,]).then((users) => {
  console.log("All Users Loaded");
  users.forEach((user) => console.log(user.name, user.email));
})
  .catch((error) => {
    console.log("Error Fectching Users Information", error)
  })


