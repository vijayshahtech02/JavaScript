// const tinder = new Object();// object create karne ka tarika he ye (singleton obj)
const tinder = {
    
}

tinder.id = "123abc";
tinder.name = "vijay"
tinder.LoggedIn = false;
// console.log(tinder);

const regualrUser = {
    email: "some@gmail.com",
    fullname: {
        username: {
            firstname: "hitesh",
            lastname: "shah"
        }
    }
}

// console.log(regualrUser.fullname.username.firstname)

const target = {
   a:1, 
   b:2
};

const source = {
    c:3,
    d:4
};

// const obj3 = Object.assign({},target, source)
const obj3 = {...target, ...source}
console.log(obj3);




//
console.log(tinder);
console.log(Object.keys(tinder))
console.log(Object.values(tinder));

