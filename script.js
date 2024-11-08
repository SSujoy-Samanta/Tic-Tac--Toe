let boxes=document.querySelectorAll(".box");
let restartBtn=document.querySelector(".restart");
let score=document.querySelector(".score");
let hide=document.querySelector(".hide");

let turnO=true;//player-X, player-O

const winpatterns=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];
const restart=()=>{
    turnO=true;
    enableBoxes();
    score.classList.add("hide")

}

boxes.forEach((box)=>{
    box.addEventListener('click',()=>{
        // console.log("box was clicked")
        if(turnO){
            box.innerText="O";
            turnO=false;
        }
        else{
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;
        checkWinner();
        checkDrawGame();
    });
});
const checkWinner=()=>{
    for (let pattern of winpatterns){
        let val1=boxes[pattern[0]].innerText;
        let val2=boxes[pattern[1]].innerText;
        let val3=boxes[pattern[2]].innerText;

        if(val1 !='' && val2!='' && val3!=''){
            if(val1===val2 && val2===val3){
                showWinner(val1);

            }
        }
        
    }
    if(boxes.disabled==true){
        drawGame();
    }
}
const checkDrawGame = () => {
    // Check if all boxes are filled but there's no winner
    let allFilled = true;
    for (const box of boxes) {
      if (box.innerText === '') {
        allFilled = false;
        break;
      }
    }
  
    if (allFilled) {
      drawGame();
    }
  };
  
const disableBoxes=()=>{
    for( let box of boxes){
        box.disabled=true;
    }
}
const enableBoxes=()=>{
    for( let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}
const showWinner=(winner)=>{
    score.innerText=`!!CONGRATULATIONS!!- WINNER IS ${winner} `;
    score.classList.remove('hide')
    disableBoxes();
}
const drawGame=()=>{
    score.innerText=`!!GAME-DRAW!!`;
    score.classList.remove('hide')
}

restartBtn.addEventListener('click',restart)