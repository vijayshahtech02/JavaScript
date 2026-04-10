const boxes = document.querySelectorAll('.box ')
// console.log(boxes)
const message = document.querySelector("#msg")

turn0 = true;

let winpatterns =[
     [0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]
]


const showWinner = (winner)  => {
      message.innerText = `Winner is ${winner}`;
       
      
}

const disableAllboxes = () => {
    for(let box of boxes) {
        box.disabled = true;
    }
}



const checkpattern = () => {
  for (let pattern of winpatterns) {

     posval1 = boxes[pattern[0]].innerText;
     posval2 = boxes[pattern[1]].innerText;
     posval3 = boxes[pattern[2]].innerText;

    if (posval1 !== "" && posval2 !== "" && posval3 !== "") {
      if (posval1 === posval2 && posval2 === posval3) {
        console.log("winner", posval1);
        showWinner(posval1)
        disableAllboxes()
         
      
        
      }
    }
  }
}


boxes.forEach(function(box) {
     box.addEventListener("click", function() {
        // console.log("box was clicked")
    
        if(turn0) {
            box.innerText = "o"
            turn0 = false
        }
        else {
           box.innerText = "x"
           turn0 =true

        }
        box.disabled = true
       checkpattern()
     

     })
     

     
})
