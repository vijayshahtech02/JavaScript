//constructor (important topic)

class Person {
    constructor (fname, lname, contact) {
        this.fname = fname;
        this.lname = lname;
        this.contact = contact;
    }

    getContact() {
        console.log(this.contact)
    }

    getName() {
         console.log(this.fname, this.lname);
         
    }
}

const p1 = new Person("vijay", "shah", "2222")
const p2 = new Person("sujal", "shah", "3333")

console.log(p2.contact);

console.log(p1.getName());





//constructor function (old method)

// function Person(fname, lname, contact) {
//      this.fname = fname;
//      this.lname = lname;
//      this.contact = contact;

//     this.getName= function() {
//            console.log(this.fname, this.lname)
//      }

//     this.getContact =  function() {
//        console.log(this.contact)
//      }

// }


// const person1 =  new Person("vijay", "shah", "6666");
// const person2 =  new Person("sujal", "shah", "9999");
// console.log(person1.fname)
// console.log(person2.fname)


// person2.getName();
// person1.getContact();



















//Normal objects

// const person ={
//     fname : "vijay",
//     lname : "shah",
//     id: 183,
//    getName : function() {
//         console.log("vijayshah")
//     },
// };

// console.log(person.fname)
// console.log(person.lname)
// console.log(person.id)
// console.log(person.getName())
