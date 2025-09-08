//Callback Function
//a callback function is also known as h.o.f
//it's a function that passed through anopther function
//let's call this other function "other function" as a parameter and the callback function is called (or executed) inside the other function

///----------------------------------Aynchronous Callback

// var users = ["ajay", "ram"];

// function adduser(username) {
//   setTimeout(function () {
//     users.push(username);
//   }, 200);
// }
// ///////////////////////////
// function getuser(username) {
//   setTimeout(function () {
//     console.log(users);
//   }, 100);
// }
// ///////////////////////////
// adduser("shushant");
// getuser();

//as per 1st option => 2 second wala function call nahi huwa and 100s wala second function called ho gaya and page refrreshed so ist only print ["Ajay","Ram"]

//so avoid this we can do use of callback function

// var users = ["ajay", "ram"];
// ///////////////////////////
// function adduser(username, callback) {
//   setTimeout(function () {
//     users.push(username);
//     callback();
//   }, 200);
// }
// ///////////////////////////
// function getuser(username) {
//   setTimeout(function () {
//     console.log(users);
//   }, 100);
// }
// adduser("shushant", getuser);

//callback means u passed 1 function to another function as parameter and get ur value when u need with the callback

// --------------------------------------------------------------------------------

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

//------------------------------------------------------------------FOR EACH---------------------------------------------

//for loop
// for (let i = 0; i < companies.length; i++) {
//   console.log(companies[i]);
// }

//forEach Loop Normal
// companies.forEach(function (company, index) {
//   console.log(company);
//   console.log(company.name);
// });

//forEach Loop WIth Callback
// companies.forEach((company, index) => {
//   console.log(company);
// });

//forEach Loop WIth Callback in one- line
// companies.forEach((company) => console.log(company.name));

//------------------------------------------------------------------FILTER---------------------------------------------

//for loop
// for (let i = 0; i < ages.length; i++) {
//   if (ages[i] >= 25) {
//     console.log(ages[i]);
//   }
// }

//filter
// const age = ages.filter((age) => {
//   if (age >= 20) {
//     return true;
//   }
// });
// console.log(age);

//filter callback in one-line
// const age = ages.filter((age) => (age >= 20 ? true : false));
// console.log(age);

//short
// const age = ages.filter((age) => age >= 20);
// console.log(age);

//Filter in Object

// const sb = companies.filter(function (company) {
//   if (company.catogary === "service based") {
//     return true;
//   }
// });
// console.log(sb);

//----------------------OR-----------------------------

// const sb = companies.filter((company) => {
//   if (company.catogary === "service based") {
//     return true;
//   }
// });
// console.log(sb);

//----------------------OR-----------------------------

// const sb = companies.filter((company) => company.catogary === "service based");
// console.log(sb);

//------------------------------------------------------------------MAP---------------------------------------------
//Callback Function
// companies.map((company, index) => {
//   console.log(company, index);
// });

// Normal Function
// companies.map(function (company, index) {
//   console.log(company, index);
// });

// const companyData = companies.map(function (company, index) {
//   return `${company.name} ${company.catogary}`;
// });
// console.log(companyData);

//------------------------------------------------------------------SORT---------------------------------------------

//Sort have two values 1 and -1

//asscending small to big
// const sorted = companies.sort((c1, c2) => {
//   if (c1.start > c2.start) {
//     return 1;
//   } else {
//     return -1;
//   }
// });
// console.log(sorted);

//desecnding big to small
// const sorted = companies.sort((c1, c2) => {
//   if (c1.start < c2.start) {
//     return 1;
//   } else {
//     return -1;
//   }
// });
// console.log(sorted);

// const sorted = companies.sort((c1, c2) => (c1.start < c2.start ? 1 : -1));
// console.log(sorted);

// const agedsmall = ages.sort((a, b) => a - b);
// console.log(agedsmall);

// const agedbig = ages.sort((a, b) => b - a);
// console.log(agedbig);

//------------------------------------------------------------------REDUCE---------------------------------------------

//for loop use for the sum
// let total = 0;
// for (let i = 0; i < ages.length; i++) {
//   total = total + ages[i];
// }
// console.log(total); //629

//Reduce use for the sum

// const sumAge = ages.reduce(function (total, age) {
//   return total + age;
// }, 0);
// console.log(sumAge); //629

// const sumAge = ages.reduce((total, age) => total + age, 0);
// console.log(sumAge);
