
//!Bonus Lecture 3 - Debouncing & Throttling in JavaScript

//? Debouncing:
//Debouncing ensures that a function is only executed after a certain period ofinactivity.
//It’s useful for events that might fire frequently, such as keystroke events during typing or window resizing.
//debounce delays the function execution untill the user stops the triggering the event for a specified time
//- Example- searchinput ,window resize,auto-save

//?How It Works:
//When the event is triggered, a timer is set.If the event is triggered again before the timer ends, the timer resets.
//The function only executes after the timer completes without interruption.

//!T.s. ->12:40
//?Throttling:
//Throttling ensures that a function is only executed at most once in a specified time interval.
//It’s useful for controlling the rate of execution for events like scrolling or resizing.
//?Example- scroll handling,resize,button Click limits

//?How It Works:
// When the event is triggered, the function executes immediately and then ignores any subsequent triggers until the specified time interval has passed.

//? Use Cases:
//Debouncing is commonly used for search input fields, where you only want to fetch results after the user has stopped typing.
//Throttling is often used for events like window resizing or infinite scrolling, where you want to limit how often a function runs.