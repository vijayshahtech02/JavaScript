const button = document.querySelector('#btn')

// button.addEventListener('click', function(e) {
//     console.log(e)
//     console.log(e.target)
//     console.log(e.type)
// })



button.addEventListener("click", function() {
    console.log("button1 was clicked handler 1")
})


const handler2 =  function() {
    console.log("button2 was clicked handler 2")
}

button.addEventListener('click', handler2)

button.addEventListener("click", function() {
    console.log("button3 was clicked handler 3")
})


// remove
button.removeEventListener("click", handler2)