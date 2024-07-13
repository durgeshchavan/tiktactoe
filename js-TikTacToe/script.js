let boxes=document.querySelectorAll(".box");
let resetBtn  =document.querySelector("#reset");

let turnO= true;

const winPat=[[0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6],[3,4,6],[6,7,8]];

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("box was clicked");
        if(turnO){
            box.innerText="O";
            turnO=false;
        } else {
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;
        checkwin();
    });
    
});
const checkwin =()=>{
    for (let patten of winPat){
        let pos1Val=boxes[patten[0]].innerText;
        let pos2Val=boxes[patten[1]].innerText;
        let pos3Val=boxes[patten[2]].innerText;

        if(pos1Val != "" &&  pos2Val != "" &&  pos3Val != ""){
            if(pos1Val ==pos2Val && pos2Val == pos3Val ){
                console.log("Winner is ");
                
            }
        }
    }
}