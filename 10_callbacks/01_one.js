//callback and higher order function

// function add(a,b, cb) {
//    let result =  a + b;
//    cb(result )
    
// }

// add(2,3, function(res) {
//    console.log(res);
   
// })


//
// function add(a,b, cb) {
//       let result = a + b;
//       cb(result)

// }

// function showResult(res) {
//      console.   (res);
     
// }

// add(10,2, showResult)


//

function add(a,b,cb) {
    let result = a +b;
    cb(result);

  return  function () {
        console.log(result)
    }
}


resultFunction = add(2,5, () => {

})
resultFunction()