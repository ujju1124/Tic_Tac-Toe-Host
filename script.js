let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelectorAll(".resetBtn");

let turnO=true;
const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("box was clicked")
        if(turnO==true){
            box.innerText=0;
            turnO=false;
        }
        else{
            box.innerText="X";
            turnO=true;
        }
        box.diasbled=true;
    });
});