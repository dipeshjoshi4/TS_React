const todos = [
    { id: 81, todo: "Organize dresser", completed: false, userID: 72 },
    { id: 82, todo: "Fix something", completed: false, userID: 13 },
    { id: 83, todo: "Play a game", completed: false, userID: 72 },
    { id: 84, todo: "Fix something new", completed: true, userID: 13 },

];

const userMap = new Map();

todos.forEach((todo) => {
    if (!userMap.has(todo.userID)) {
        userMap.set(todo.userID, [])
    }
    userMap.get(todo.userID).push(todo)
})

// console.log(userMap);

console.log(Array.from(userMap)); //Convert in Array 

Array.from(userMap).map(([userID, todos]) => {
    console.log(userID, todos);
})