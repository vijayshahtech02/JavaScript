let buttons = document.querySelectorAll(".choice");
let result = document.getElementById("result");

buttons.forEach((btn) => {
    btn.addEventListener("click", function () {
        let userChoice = btn.getAttribute("data-choice");
        playGame(userChoice);
    });
});

function playGame(user_ki_Choice) {

    let choices = ["rock", "paper", "scissors"];

    let randomIndex = Math.floor(Math.random() * 3);
    let computerChoice = choices[randomIndex];

    // let finalResult = "";

    if (user_ki_Choice === computerChoice) {
     
        result.innerHTML = `Draw --> comp - ${computerChoice}  | you - ${user_ki_Choice} `  
      }
    else if (
        (user_ki_Choice === "rock" && computerChoice === "scissors") ||
        (user_ki_Choice === "paper" && computerChoice === "rock") ||
        (user_ki_Choice === "scissors" && computerChoice === "paper")
    ) {
        // finalResult = "You Win 🎉";
        result.innerHTML = `congratulation you won --> comp - ${computerChoice}  | you - ${user_ki_Choice}`
    }
    else {

     result.innerHTML = `Sorry you lost Computer wins  --> comp - ${computerChoice}  | you - ${user_ki_Choice}`    
      }

    // result.innerText = `You: ${user_ki_Choice} | Computer: ${computerChoice} → ${finalResult}`;
}