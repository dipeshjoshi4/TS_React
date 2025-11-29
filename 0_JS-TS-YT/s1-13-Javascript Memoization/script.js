//-------------------Javascript Memoization,Cashing in JS-----------------

//- Implementing Memoization in Javascript 
//- Memoization is an optimization technique that can be used to reduce time-consuming calculation by saving previous input to something called cache and returning the result from it
//- in react with usehook we can do memoization

//in a simple way
//there is any program in and running because of user request and the certain time take to run that program
//now whenever the request again come from user to running the code .i dont want that the code is again run take time  and give result .
//insted i want share the previous code  Answer which can i store in memory cache



//?Normal Function Without Memoization
/*
let sum = 0;
const calc = (n) => {
  for (let i = 0; i <= n; i++) {
    sum = sum + i;
  }
  return sum;
};
console.time();
console.log(calc(5)) //15
console.timeEnd(); //7.42ms - it can chnage everytime
*/

//?Our Mission again someinput came the code not take this much time and we get desired answer

//?With Memoize Function
//memorization function for better time efficient  for same input
//memoize function use callback /closure/rest operator => we want this kind of result as per input given output answer
//for that we need in objectmeans cache where o want to show this => {'5':15,'6':21,'7':}


let sum = 0;
const calc = (n) => {
  for (let i = 0; i <= n; i++) {
    sum = sum + i;
  }
  return sum;
}

const memoize = (fun) => { // here callback fun is calc
  let cache = {};

  return function (...args) {
    let n = args[0]

    if (n in cache) {
      console.log("cache");
      console.log(cache);
      return cache[n];
    }
    else {
      console.log("calculating First time");
      let reuslt = fun(n);
      cache[n] = reuslt;
      return reuslt;
    }
  }
}

console.time();
const efficient = memoize(calc) //this function also return function so we have to store this
console.log(efficient(5)); //fun(...args) so we pass the 5 here
console.timeEnd();

console.time();
console.log(efficient(5)); //fun(...args) so we pass the 5 here
console.timeEnd();

