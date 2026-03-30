function sayMyname() {
    console.log("vijay")
}
// sayMyname()

function addTwoNumber(number1, number2) {
   let sum = number1 + number2;
   return sum;
}

let result = addTwoNumber(2,3)
// console.log(result);


function sub(num1, num2) {
    return num1 - num2;
}
let finalValue = sub(10, 3);
// console.log(finalValue);


function LoggedIn(username) {
    if(username === undefined){
       console.log("please enter ther username");
       return;
    }
    return `${username} is just Logged in`;
}

console.log(LoggedIn("Raju"));
