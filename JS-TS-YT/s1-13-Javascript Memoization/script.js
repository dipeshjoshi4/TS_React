//-------------------Javascript Memoization,Cashing in JS-----------------

//Implementing Memoization in Javascript
//in react with use of hook u can do memoization

//Memoization is an optimization technique that can be used to reduce
//time-consuming calculation by saving previous input to something called cache and returning the result from it

//in a simple way
//there is any program in and running because of user request and the certain time take to run that program
//now whenevr the request again come from user to running the code .i dont want that the code is again run and give result .
//insted i want do share the before code runnig result which can i store in memory cache

let sum = 0;
const calc = (n) => {
  for (let i = 0; i <= n; i++) {
    sum = sum + i;
  }
  return sum;
};

//memorization function for better time efficient  for same input

//memoize function use callback /closure/rest oper => we want this kind of result as per input given output answer
//for that we need in object => {'5':15,'6':21,'7':}

const memoize = (fun) => {
  let cache = {};
  return function (...args) {
    let n = args[0];
    if (n in cache) {
      console.log("cache"); //cache se ayega 
      console.log(cache); //cache main kya ayega
      return cache[n];
    }
    else {
      console.log("calculating first time")
      let result = fun(n);
      cache[n] = result;
      return result;
    }
  }
};

//first timing calling
console.time();
const efficient = memoize(calc);
console.log(efficient(5));
console.timeEnd();

//second timing calling
console.time();
console.log(efficient(5));
console.timeEnd();

//third timing calling
console.time();
console.log(efficient(5));
console.timeEnd();
