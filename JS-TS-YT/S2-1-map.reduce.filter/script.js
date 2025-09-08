//----------------------------------------------------------------// Usecases----------------------------------------------------------------------------------
//1.write code to get array of names from given array of users
//2.get back only active users
//3.sort users by age descending

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

//sol-1-level-1-forloop

// 1.array of names-----------------

/*
const names = [];
for (i = 0; i < users.length; i++) {
  names.push(users[i].name);
}
console.log(names);
*/

//2.get back only active users----------
/*
const names = [];
for (i = 0; i < users.length; i++) {
  if (users[i].isActive) {
    names.push(users[i].name);
  }
}
console.log(names);
*/

//sol-2-level-2-forEach loop

//1.array of names
/*
const names = [];
users.forEach((user) => {
  names.push(user.name);
});
console.log(names);
*/

//2.get back only active users----------
/*
const names = [];
users.forEach((user) => {
  if (user.isActive) {
    names.push(user.name);
  }
});
console.log(names);
*/

//the map method returns a new array,wheres the forEach() does not return a new array
//the forEach() method is simillar to the for loop ,but it does not returns the value
//the map() method is similar to the forEach() but it returns a new array

//sort
// sort users by age descending
//acessending
/*
users.sort((user1, user2) => (user1.age < user2.age ? -1 : 1));
console.log(users);
*/

// descending
/*
users.sort((user1, user2) => (user1.age > user2.age ? -1 : 1));
console.log(users);
*/
//Solution-level-3-map & filter
//filter to active user and then map that active user

const nameOfActive = users
  .filter((user) => user.isActive)
  .sort((user1, user2) => (user1.age > user2.age ? -1 : 1))
  .map((user) => user.name);
console.log(nameOfActive);
