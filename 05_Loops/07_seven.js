// const myNums = [1,2,3,4,5,6,7,8,9,10]

// const newNum = myNums.map((num) => {
//     return  num + 10;
// })
// console.log(newNum)

//

const Num = [1,2,3,4,5,6,7,8,9,10]
const newNum = Num.map((num) =>{
    // console.log(num)
   return num + 2;
})
.map((num) => {
    return  num + 1;
})
.filter( (num) =>{
   return num < 10
})

console.log(newNum)