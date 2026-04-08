const clock = document.querySelector('#clock');
// const body = document.querySelector("body")



setInterval(function(){
    let date = new Date();
// console.log(date.toLocaleTimeString())
clock.innerHTML = date.toLocaleTimeString()

},1000)