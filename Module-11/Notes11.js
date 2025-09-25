//!------------------------------------Module 11: React Query – State Management------------------------------------


//!140-Lec-1-Introduction to React Query: The Why and How of Modern Data Fetching

/*
- In this lecture, we introduced React Query, a powerful data-fetching library that simplifies managing server-state in your React applications.
- We covered what React Query is, why you need it, and the key benefits it offers, such as simplifying data fetching, caching, and background updates.
- By the end of this lecture, you'll have a clear understanding of the core objectives of React Query and how it can enhance your development workflow.
*/

//- React query is best library for managing and caching data.
//- it increasely your webiste performance immenssely,and you have to writevery little code-almost like magic
//- react query is library that helps you manged cached data for your API Requests
//- its best used for fetching,updating and catching data

//?What is Cache?
//A cache is like a temporary storage area in memory where fetched data is kept.
// When you make the same request again, React Query can serve the data from the cache instead of making a new request every time.

//?React Query also has features like

// 1.Caching our data
// 2.Automatic retries if the server doesn't respond
// 3.Request cancellation when a component unmounts
// 4.The ability to automatically refresh data at set intervals(like every two minutes).

//?In short, React Query makes managing and caching API data very simple and efficient.You can just focus on writing less code and getting better performance.


//!142-lec-2-Setting Up React Query: Configuration and Query Client Provider

/*
- In this lecture, we’ve walked through the initial setup for using React Query in our project.
- We installed the React Query dependency via npm and then wrapped our root component with the QueryClientProvider.
- This ensures that we can leverage all the features React Query offers for data fetching and caching throughout our app.
*/