// // sync

// console.log("1");
// console.log("2");
// console.log("3");


// // asyn
// console.log("1");
// console.log("2");

// setTimeout(() => {
//     console.log("Hello")
// }, 4000)

// console.log("3");


//callback
// Option 1

// function calculation(a, b, sum) {
//     let result = a + b;
//     sum(result)
// }

//  calculation(2,3, (res) => {

//    console.log(res);
   
// })


//Option 2

function calculation(a, b, sum) {
       sum(a ,b);
}

function add(num1, num2) {
   console.log(num1 + num2)
}

calculation(4,5, add)




// ✔️ Option 3: Return value use karni hai to function change karo

// function calculation(a, b, sum) {
//     let result = a + b;
//     return sum(result); // important
// }

// let final = calculation(2,3, (res) => {
//    return res * 2;
// })

// console.log(final); // 10