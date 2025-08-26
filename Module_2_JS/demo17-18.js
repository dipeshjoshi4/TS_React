

//- with new keyword we create promise  .which is an object
//- also pass resolve and reject data
//?Promise give 3 functions
//then - for success
//catch - for the reject
//finally - always have to work


//?SYNTAX
/*
const myPromise = new Promise((resolve, reject) => {
    if (true) {
        resolve('')
    } else {
        reject('')
    }
})
myPromise.then((result) => {
    console.log(result);
}).catch(() => {

}).finally(() => {

})
*/

//? Example: Fetching users from an API
/*
fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
        // response is a ReadableStream, so we need to convert it to JSON
        return response.json();
    })
    .then((data) => {
        // This runs if fetch was successful
        console.log("Users data:", data);
        document.body.innerHTML = `<h2>First User: ${data[0].name}</h2>`;
    })
    .catch((error) => {
        // This runs if something went wrong
        console.error("Error fetching users:", error);
        document.body.innerHTML = `<p style="color:red;">Failed to load users.</p>`;
    })
    .finally(() => {
        // This always runs (success or failure)
        console.log("Fetch attempt finished ✅");
    });
*/


//?Example
/*
function orderFood(isResturenatOpen) {
    return new Promise((resolve, reject) => {
        console.log("Placing Order");
        setTimeout(() => {
            if (isResturenatOpen) {
                resolve("Order Recevied")
            } else {
                reject("order Rejected")
            }
        }, 3000);
    })
}
orderFood(true).then((res) => {
    console.log(res);
    return "Preparing Food"
}).then((res) => {
    console.log(res);
    return "Food is Out For Delivery"
}).then((res) => {
    console.log(res);
}).catch((error) => {
    console.log("error", error);
}).finally(() => {
    console.log("Thank you for using Our Service");
})

*/

//?Example-2

fetch("https://jsonplaceholder.typicode.com/").then((res) => {
    return res.json()
}).then((data) => {
    console.log(data);
}).catch((error) => {
    console.log(error);
})
