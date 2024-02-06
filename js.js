let boxes = document.querySelectorAll(".box")
let Resetntn = document.querySelector("#reset");
let msg1 = document.querySelector(".msg-container")
let msg2 = document.querySelector(".msg")
let msg3 = document.querySelector(".btn1")

let Option0 = true;

let Pattern =[[0,1,2],
[0,3,6],
[0,4,8],
[1,4,7],[2,5,8],[2,4,6],
[3,4,5],
[6,7,8]
];
const resetgame=()=>{
    Option0 = true;
    enableboxes();
    msg1.classList.add("hide")
}
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("hiw ")
    if(Option0){
        box.innerHTML="O"
        Option0=false;
        
    }else{
        box.innerHTML="X"
        Option0=true;
    }
        box.disabled=true;
        
        checkWinner();
    })
})
const Newbox=()=>{
    for (let box of boxes){
        box.disabled=true;
    }
}
const enableboxes=()=>{
    for (let box of boxes){
        box.disabled=false;
        box.innerHTML = "";
      
    }
}
const showwinner =(winner)=>{
    msg2.innerHTML=`Congratulations. Winner is ${winner} `
    msg1.classList.remove("hide")
    Newbox()
}
const checkWinner = ()=>{
    for (let check of Pattern){
        let pos1=boxes[check[0]].innerHTML;
        let pos2=boxes[check[1]].innerHTML;
        let pos3=boxes[check[2]].innerHTML;
        if(pos1 != "" && pos2 != "" && pos3 != ""){
            if(pos1 ===pos2 && pos2 ===pos3){
                console.log("Winner",pos1)
                showwinner(pos1);
               
            }
        }
    
    }
}


msg3.addEventListener('click',resetgame);
Resetntn.addEventListener('click',resetgame);
