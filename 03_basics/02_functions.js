function calculatePrice(...num1){
     return num1
}

console.log(calculatePrice(2,3,4,5))


let user = {
    name : "vijay",
    price : 200
};

function handleObject(anyobj) {
    console.log(`username is ${user.name} and price is ${user.price}`)
}

handleObject(user)


function myObject(anyobj) {
    console.log(`username is ${anyobj.name} and price is ${anyobj.price}`)
}

myObject({
      name : "sujal",
      price : 1999
})


const myNewArray = [100,200,300,400,500]

function returnSeondValue(getArray){
      return getArray[2]; 
}

console.log(returnSeondValue(myNewArray))