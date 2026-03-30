function SayMyName() {
    console.log("Vijay shah")
}
// SayMyName();


function AddTwoNumbers(number1, number2) {
      console.log(number1 + number2);
      
}
// AddTwoNumbers(10,4);

function AddTwoNumbers(number1, number2) {
      return number1 + number2;

      
}

result = AddTwoNumbers(10,4);
// console.log(result);

function AddTwoNumbers(number1, number2) {
      let sum = number1 + number2;
      return sum;

      
}

result = AddTwoNumbers(10,4);
// console.log(result);


function UserLoggedIn(user) {
     if(user === undefined) {
        console.log("please enter the username: ");
        return
     }
    
    return `${user} user just logged in`;
}


console.log(UserLoggedIn());



function demo(x) {
    if(x < 10) {
        console.log("x is less than 10");
        return;  // function turant exit
    }
    console.log("This will only run if x >= 10");
}

demo(5);
demo(15);