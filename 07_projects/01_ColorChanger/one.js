const buttons = document.querySelectorAll('.button')
// console.log(buttons)
const body = document.querySelector('body')

buttons.forEach(function(btn) {
    // console.log(btn)

    btn.addEventListener('click', function(e){
        // console.log(e)
        // console.log(e.target)
        console.log(e.target.id)
       if(e.target.id === e.target.id) {
           body.style.backgroundColor = e.target.id;
       }
    })
})