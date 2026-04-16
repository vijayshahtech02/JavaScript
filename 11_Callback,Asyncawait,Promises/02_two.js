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

// function asyncFunc1() {
//    return new Promise((resolve, reject) => {


//  setTimeout(() => {
//        console.log("data1");
//        resolve("success")
       
//     }, 4000)

    
//    }) 

   
// }

// function asyncFunc2() {
//    return new Promise((resolve, reject) => {


//  setTimeout(() => {
//        console.log("data2");
//        resolve("success")
       
//     }, 4000)

    
//    }) 

   
// }

// console.log("fetching data1");

// let p1 = asyncFunc1();

// p1.then((res)=> {

//     console.log("fetching data2");

//       let p2 = asyncFunc2()
//       p2.then((res)=>{

//       })


       
// })


//promise chain
// function getData(dataId) {
//   return  new Promise((resolve, reject) => {

//        setTimeout(() => {
//        console.log(dataId);

//        resolve("success");

    
//     }, 2000);

//  });
   
// }

// console.log("fetting data1..");

// getData(1)
// .then(() => {

// console.log("fetting data2..");
// return getData(2)

// })
// .then(()=> {
//     console.log("fetting data3..");
// return getData(3)

// })
// .then((res) =>{
//     console.log(res);
    
// })




//Async Await
function getData(dataID) {
  return new Promise((resolve, reject) => {
     setTimeout(() =>{
        console.log(dataID);
        resolve("sucess")
        
     }, 3000)
      

    })
    
} 

 let getAlldata = async () => {
 await getData(4)   
 await getData(3)
 await getData(5)

}

getAlldata()