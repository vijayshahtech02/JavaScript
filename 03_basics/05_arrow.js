// let user = {
//     username: "vijay",
//     price: 333,

//     welcome_msg :  function() {
//          console.log(`${this.username}, welcome to wesbite`)
//          console.log(this);
//     }
// }

// user.welcome_msg();
// user.username = "sam";
// user.welcome_msg();

//arrow function 

const addtwo = (num1, num2) => {
      return num1 + num2;
}
console.log(addtwo(2,3))

const addthree = (num1, num2) => (num1 + num2)
console.log(addthree(20,40))