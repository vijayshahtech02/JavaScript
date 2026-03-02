const myobj = {
    name : "vijay",
    "full name" : "vijay shah",
    age : 22,
    email: "vijayshah.tech02@gmail.com",
    location : "Pune",
    isLoggedin : true,
    myfunction : function() {
        console.log("hello raju Bhai");
        
    }

}
//access
console.log(myobj.email);
console.log(myobj["name"])
console.log(myobj["full name"]);

//change 
myobj.email = "shahvijay.gmail.com";
console.log(myobj["email"]);

//add in obj
myobj.secondName = "Raju";
// console.log(myobj);

//function
myobj.greeting = function() {
    console.log("hello vijay");
    
}
console.log(myobj.greeting());

console.log(myobj);
console.log(myobj.myfunction());
