console.log("MAP-FILTER-REDUCE || HIGHER-ORDER-FUNCTION");

//Higher order function

//forEach
//filter
//map
//sort
//reduce

///INTERVIEW QUESTION--------PRODUCT BASED ------
//Q1- FOReach,map or filter ka pollyfill likh ke baaato
//q2-biable kya hai?
//q3-transpiler kya hai?
//q4. write polyfill of filter/map/reduce => polyfill means the actull logic which apply while doing map.filter,reduce
//q5.using map function in the map function

const companies = [
  {
    name: "google",
    catogary: "product based",
    start: 1981,
    end: 2004,
  },
  {
    name: "amazon",
    catogary: "product based",
    start: 1992,
    end: 2008,
  },
  {
    name: "paytm",
    catogary: "product based",
    start: 1999,
    end: 2007,
  },
  {
    name: "coforge",
    catogary: "service based",
    start: 1989,
    end: 2010,
  },
  {
    name: "mindtree",
    catogary: "service based",
    start: 1989,
    end: 2010,
  },
];

const ages = [33, 12, 20, 16, 5, 54, 21, 45, 89, 75, 46, 22, 88, 89, 14];

//standard loop
//for loop => for geeting array intilize of i and checking the condintion.....
// for (let i = 0; i < companies.length; i++) {
//   console.log(companies[i]);
// }

//now we optimize little bit

//----------------------------------------------------------//FOREACH---------------------------------------------------------------------------------

//forEach => forEach callback reecevied

//1st way to write
/*
companies.forEach(function (companies, index) {
  console.log(companies);
  console.log(companies.name);
});
*/

//2nd way to write
// companies.forEach((company, index) => {
//   console.log(company);
// });

//OR

//3rd way to write
// companies.forEach((company, index) => console.log(company));

//-----------------------------------------------------------------//FILTER------------------------------------------------------------------------

//forEach loop
/* 
for (let age of ages) {
  if (age >= 20) {
    console.log(age);
  }
}
*/

//Now Optimize with filter H.O.F

// const age = ages.filter((age) => {
//   if (age >= 20) {
//     return true;
//   }
// });
// console.log(age);

//OR
//Now Optimize  MORE with filter H.O.F

// const finalAge = ages.filter((age) => age >= 20);
// console.log(finalAge);

//getting values from object ans show the only service based companies

/*
const serviceAns = companies.filter((companies) => {
  if (companies.catogary === "service based") {
    return true;
  }
});
console.log(serviceAns);
*/

// OR
// NOW MORE OPTIMIZE ABOVE CODE

/*
const serviceShort = companies.filter(
  (companies) => companies.catogary === "service based"
);
console.log(serviceShort);
*/

//----------------------------------------------------------------//map function---------------------------------------------------------------------------
/*
companies.map((company, index) => {
  console.log(company, index);
});
*/

//for whenevr you have to return value you have store in varables

/*
const dummy = companies.map((companies, index) => {
  return `${companies.name} ${companies.catogary}`;
});
console.log(dummy);
*/

//using map function in the map function

//----------------------------------------------------------------//sort function---------------------------------------------------------------------------
//accesding 1 to 100

/*
const sorted = companies.sort(function (c1, c2) {
  if (c1.start > c2.start) {
    return 1;
  } else {
    return -1;
  }
});
console.log(sorted);
*/

// OR || ARROW FUNCTION

/*
const sorted = companies.sort((c1, c2) => (c1.start > c2.start ? 1 : -1));
console.log(sorted);
*/

// decending order for 100 to 1
// const sorted = companies.sort((c1, c2) => (c1.start < c2.start ? 1 : -1));
// console.log(sorted);

//for array 2 sorted method
/*
const sortedAges = ages.sort((a, b) => a - b);
console.log(sortedAges);
*/

//----------------------------------------------------------------//Reduce function---------------------------------------------------------------------------

//Simple way
/*
let total = 0;
for (let i = 0; i < ages.length; i++) {
  total += ages[i];
}
console.log(total); //629
*/

//reduce H.O.F
/*
const sum = ages.reduce((total, age) => {
  return total + age;
}, 0); //total intilize with 0
console.log(sum);
*/

//OR || ARROW FUNCTION
/*
const sum = ages.reduce((total, age) => total + age, 0);
console.log(sum); //629
*/
