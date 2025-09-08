console.log("s1-2-Async Await Promises callback");
/*
const datas = [
  { name: "Ajay", profession: "Software Developer" },
  { name: "Anuj", profession: "Software Developer" },
];

function getDatas() {
  setTimeout(() => {
    let output = "";
    datas.forEach((data, index) => {
      output += `<li>${data.name}</li>`;
      //   output += `<li>${data.index}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

function createData(newData) {
  setTimeout(() => {
    datas.push(newData);
  }, 2000);
}

createData({ name: "Vivek", profession: "Software Engineer" });
getDatas();


*/

//NOTES :ABOVE TIMING FUNCTION WILL BE 1S THATS WHY OUR NEW OBJECT DATA NOT BE SEEN IN OUTPUT THATS TIME DEPENDENCY OF OTHER FUNCTION TO SOLVE THAT's why WE HAVE ASYNC...AWAIT,CALLBACKS,PROMISES

///-----------------------------------------------------callbacks function------------------------------------------

//  its solved very easy .so it first getdatas() function will after the value of creatdata() function with push into datas and then
//  runs getdatas function
/*
const datas = [
  { name: "Ajay", profession: "Software Developer" },
  { name: "Anuj", profession: "Software Developer" },
];

function getDatas() {
  //settimeout is callback function with some timing scenrio then run
  setTimeout(() => {
    let output = "";
    //forEach loop is also callback
    datas.forEach((data, index) => {
      output += `<li>${data.name}</li>`;
      //   output += `<li>${data.index}</li>`;
    });

    document.body.innerHTML = output;
  }, 1000);
}

function createData(newData, callback) {
  setTimeout(() => {
    datas.push(newData);
    callback();
  }, 2000);
}
// getDatas();
createData({ name: "Vivek", profession: "Software Engineer" }, getDatas);

*/


///-----------------------------------------------------Promise function------------------------------------------

/*
const datas = [
  { name: "Ajay", profession: "Software Developer" },
  { name: "Anuj", profession: "Software Developer" },
];

function getDatas() {
  setTimeout(() => {
    let output = "";
    datas.forEach((data, index) => {
      output += `<li>${data.name}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

function createData(newData) {

     return new Promise((resolve, reject) => {
        setTimeout(() => {

        datas.push(newData);
        let error = false;

             if (!error) {
                resolve();
             } else {
                reject("EERROR COMES WHEN let error will be true");
              }
          }, 2000);

}) 
  
}
createData({ name: "Vivek", profession: "Software Engineer" }).then(getDatas).catch(err =>console.log(err));

*/

///-----------------------------------------------------Async/Await function------------------------------------------

//Async => sequence not decided
//sync => process happining step by step

//async,await is use in API most of the time


const datas = [
  { name: "Ajay", profession: "Software Developer" },
  { name: "Anuj", profession: "Software Developer" },
];

function getDatas() {
  setTimeout(() => {
    let output = "";
    datas.forEach((data, index) => {
      output += `<li>${data.name}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

function createData(newData) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      datas.push(newData);
      let error = false;

      if (!error) {
        resolve();
      } else {
        reject("EERROR COMES WHEN let error will be true");
      }
    }, 2000);
  });
}

/*
createData({ name: "Vivek", profession: "Software Engineer" })
  .then(getDatas)
  .catch((err) => console.log(err));
  */

async function start() {
  await createData({ name: "vivek", profession: "Software Engineer" });
  getDatas();
}
start();
