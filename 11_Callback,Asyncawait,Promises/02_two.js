//bad code  - call back hell
// function getData(dataId, getNextData) {
//     setTimeout(() => {
//        console.log(dataId)
//        if(getNextData) {
//         getNextData()
//        }
       
//     }, 3000)
// }

// getData(1, () => {
//      getData(2, ()=> {
//         getData(3, ()=> {
//             getData(4)
//         })
//      })
// })



//Promises

// let promies= new Promise((resovle, reject) => {
//        console.log("I am Promise");
//        reject("some error occured") 
// })

// console.log(promies);


//

// function getData(dataId, getNextData) {
//   return  new Promise((resolve, reject) => {

//        setTimeout(() => {
//     //    console.log(dataId);

//     //    resolve("success");

//     reject("some error")

//        if(getNextData) {
//         getNextData()
//        }
//     }, 7000);

//  });
   
// }

// let result = getData(90)
// console.log(result);


///

//  function getPromise() {

//  return new Promise((resolve, reject)=> {
//      console.log("I am a Promise");
//      resolve("success")
     
//     // reject("Network error")
// })

// }

// let promise = getPromise()

// promise.then((res)=>{
//     console.log("promise success", res)
// });
 
// promise.catch((err)=>{
//     console.log("promise failed",err )
// })
 


//