

**Problem Statement: Build a Live Search App in React**

Create a **React application** that implements a live product search using the **Dummy JSON API** ( [https://dummyjson.com/products](https://dummyjson.com/products) ).
The app should fetch data dynamically as the user types and display results below the search bar.

**Requirements**

1. When the app loads, it should **display default product data** (from the API).
2. When the user types in the search bar, it should **fetch results matching the query using Axios**.
   Use this: [https://dummyjson.com/products/search?q=${query}](https://dummyjson.com/products/search?q=${query})
3. The results should update **in real-time — no search button needed**.
4. If the user clears the input, it should again show **default data**.
5. Handle empty results by showing a message like **“No products found”**.
6. Use **only one useEffect** to handle both default and search API calls.



//step-1 search bar banan hai and the default data print karvana hai from the api
//step-2- input as query and the query result show there and there in list no search button needed
//step-3-result clear the input default data back
//step-4-handle empty data => No Products Found
//step-5- for side state updation use one one useEffect call for default call and on api call


-----

// - u have to install axios => npm i axios
// - 2 state as of now for data for input
