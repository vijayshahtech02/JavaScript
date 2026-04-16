const URL = "https://official-joke-api.appspot.com/random_joke";
let setup = document.querySelector("#steup")
let punchline = document.querySelector("#punchline")
let button = document.querySelector("button")

async function getJokes() {
    console.log("getting Cat Fact.... ");

    let response = await fetch(URL);
    let data = await response.json();
    console.log(data.setup);
    console.log(data.punchline);
    
  
    button.addEventListener("click", () => {
            
    setup.innerText = data.setup;
    punchline.innerText = data.punchline;
})









}
getJokes()