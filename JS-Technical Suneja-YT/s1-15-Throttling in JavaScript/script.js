console.log("Throttling in JavaScript");

//click and after click a specific time and then function call and jab tak function call na huw tab tak button will be diabaled

//usecase => button clicked,now button disabled untill function call happen and then button Enable

const myThrottal = (fun, d) => {
  return function (...args) {
    document.getElementById("myid").disabled = true;
    setTimeout(() => {
      fun();
    }, d);
  };
};

const newFun = myThrottal(() => {
  document.getElementById("myid").disabled = false;
  console.log("User Clicked!!!");
}, 4000);
