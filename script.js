let boxes = document.querySelectorAll(".btn");
let newbtn = document.querySelector("#new-game");
let resetbtn = document.querySelector("#reset-btn");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let trunO = true;

const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 4, 6],
  [2, 5, 8],
  [3, 4, 5],
  [6, 7, 8],
];

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (trunO === true) {
      box.innerText = "O";
      trunO = false;
    } else {
      box.innerText = "X";
      trunO = true;
    }
    box.disabled = true;
    checkWinner();
  });
});
let resetgame=()=>{
    turnO=true
    enablebox()
    msgcontainer.classList.add("hide")
}

let enablebox=()=>{
    for(box of boxes){
        box.disabled=false
        box.innerText=""
    }
}

let showWinner=(winner)=>{
    msg.innerText=`🏅Congratulations Winner is ${winner}🏅`;
    msgcontainer.classList.remove("hide");
}

function disabled1(){
    boxes.forEach((box)=>{
        box.disabled=true;
    })
}

let checkWinner = () => {
  for (pattern of winPatterns) {
    pos1val = boxes[pattern[0]].innerText;
    pos2val = boxes[pattern[1]].innerText;
    pos3val = boxes[pattern[2]].innerText;

    if(pos1val!=="" && pos2val!=="" && pos3val!==""){
        if(pos1val===pos2val && pos2val===pos3val){
            disabled1()
            showWinner(pos1val);
        }
    }
  }
};
newbtn.addEventListener("click",resetgame)
resetbtn.addEventListener("click",resetgame)
