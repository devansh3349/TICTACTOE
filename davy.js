


let started = false;

let winningPtn =[
    [0,1,2],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [3,4,5],
    [6,7,8],
    [0,4,8],
    [2,4,6]

];
let gamePtn = [];

let user1 = "X";
let user2 = "O";

let chance = null;

let start = function(){
    if(started == false){
    console.log("game started")
    let h3 = document.querySelector("h3");
    h3.innerText = "GAME ON";
    started = true;
    chance = user1;
    }
};

document.addEventListener("keypress",start);

let btns = document.querySelectorAll(".move");

let reset = document.querySelector("#reset");




for(let i=0;i<btns.length;i++){
    btns[i].classList.add("all");
    btns[i].addEventListener("click",function(){
        if(chance == user1){
            console.log("user1 move");
            btns[i].innerText = `${user1}`;
            chance = user2;
        }
        else if(chance == user2){
            console.log("user2 move");
            btns[i].innerText = `${user2}`;
            chance = user1;
        }
        btns[i].disabled = true;

        checkAns();
    })
       
    reset.addEventListener("click",function(){
        btns[i].innerText = "";
        btns[i].disabled = false;
        chance = user1;
        h3.innerText = "GAME ON";
        
        
        
    });

    

}
let h3 = document.querySelector("h3");

function checkAns(){
    for(let i=0;i<winningPtn.length;i++){
        //console.log(winningPtn[i][0],winningPtn[i][1],winningPtn[i][2]);

        //console.log(btns[winningPtn[i][0]].innerText,btns[winningPtn[i][1]].innerText,btns[winningPtn[i][2]].innerText);

        let value1 = btns[winningPtn[i][0]].innerText;
        let value2 = btns[winningPtn[i][1]].innerText;
        let value3 = btns[winningPtn[i][2]].innerText;
        
        if(value1!=""&& value2!="" && value3!=""){

        if(value1 == value2 && value2 == value3 && value1==value3){
            h3.innerText = `Winner is ${value1}`;
            
            h3.style.fontSize = "2vw";
            chance = null;

        
            
        }
    }
    }
}

