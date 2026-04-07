// const arr =[1,2,3,4,5,6];

// const NewArr = arr.reduce((acc, currval) => {
//     console.log(`acc - ${acc} and currval - ${currval}`)
//     return acc + currval; 
// }, 0)

// console.log(NewArr)

//imp

const shoppingCart =[
    {
        itemName : "javascript",
        itemPrice : 1999
    },
    {
        itemName : "dataSci",
        itemPrice : 999
    },
    {
        itemName : "python",
        itemPrice : 3999
    },
    {
        itemName : "Java",
        itemPrice : 4999
    },

]

let myCart = shoppingCart.reduce((acc, item) =>{
        return acc + item.itemPrice

},0)
console.log(myCart)