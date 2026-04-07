const coding =["javascript", "python", "java", "cp"]




const myvalues = coding.forEach((item) => {
    // console.log(item)
})

console.log(myvalues); //is not working 



const myNum = [1,2,3,4,5,6,7,8,9,10];


// const NewNum = myNum.filter((num) => {
//     return num > 4;
// })
// console.log(NewNum)

// or

// const NewNum = myNum.filter((num)=> (num > 4))

//or

// const NewNum = myNum.filter((num)=> num > 4)

// console.log(NewNum);


//imp

// const NewNum = [];
// myNum.forEach((num) => {
//      if(num > 4) {
//           NewNum.push(num)
//      }
// })

// console.log(NewNum)

//

const books = [
    {title: 'Book one', genre:"Javascript", publish: 1981, edition: 2004},
    {title: 'Book two', genre:"marathi", publish: 1995, edition: 1903},
    {title: 'Book three', genre:"English", publish: 1990, edition: 2005},
    {title: 'Book four', genre:"Java", publish: 1914, edition: 1900},
    {title: 'Book five', genre:"Javascript", publish: 1999, edition: 2078},
    {title: 'Book six', genre:"ruby", publish: 2390, edition: 3002}
]

const myCollection = books.filter((book) => {
     return book.genre === "Javascript";
})

console.log(myCollection)