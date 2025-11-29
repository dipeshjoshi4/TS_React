console.log("Debouncing in JavaScript");

//------------------------Debouncing in JavaScript------------------

// - setimeout web api provide debouncing ,throttling not js
// - anwhere you use where unwanted function call .where u can use debouncing
// - debouncing is when u scroll  or window size small and wide or in search bar the unwanted function will call that to stop we do debouncing
// - that unwanted function again and again call that reduce time efficiency and made buggy app
// - so for that we have 2 option to call a unwanted function
// - 1.specific time baad
// - 2.user is not active tab call ho

//SEARCH BAR EXAMPLE
///debouncing is when u asking for something and after the ur key press in some millisecond you work show thats called debouncing

let counter = 0;

function getData() {
  console.log("fetching Data" + counter++);
}

//by every key press the function call happen thats not for efficent for app
//so i need to write a better smart function which can run by a certain time .and when time comes its always a setTimeout function will be good
//jo callback use karta hai and also have option of delay

function myDebounce(call, d) {
  let timer;
  return function (...args) {
    if (timer) clearTimeout(timer); //USER WITHOUT WATING SATRT SOMETHING NEW
    setTimeout(() => {
      call();
    }, d);
  };
}

const betterFunc = myDebounce(getData, 1000);
