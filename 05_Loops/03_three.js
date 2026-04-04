// const arr=[1,2,3,4,5]

// for(const num of arr) {
//     console.log(num);
    
// }


// const greetings = "Hello Wolrd";
// for (const greet of greetings) {
//     console.log(greet)
// }

//map 
const map = new Map();
map.set('IN', "India")
map.set('USA', "United state of America")
map.set('Fr', "France")
map.set('IN', "India") //duplicate value add nahi kar skate isama 
console.log(map)

for(const [key, value] of map) {
    console.log(key, ':-', value)
}