
let level = document.getElementById('level');
let totalScore = document.getElementById('totalScore');
let colors=document.querySelectorAll(".colors")


let colorArr = [green, red, yellow, blue];
let gameArr = [];
let userArr=[];
let playGame = false;
let score = 0;
let flashedColor;
let levelNo = 0;
let interval;

document.addEventListener('keypress',()=>{
    if(playGame==false){
        playGame=true
        game();
        levelNo=0
        totalScore.innerHTML=''
    }
    
})

for(const color of colors){
    color.addEventListener('click',showColor)   
}

function game(){
    userArr=[];
    levelNo++
    level.innerHTML=`Level ${levelNo}`
    flashedColor=colorArr[Math.floor(Math.random()*3)]
    console.log(flashedColor);
    flash(flashedColor);
    gameArr.push(flashedColor.id)

  
}

function flash(color){
   color.classList.add('flash')
    setTimeout(()=>{
        color.classList.remove('flash')
    },300)
}

function userFlash(color){
    color.classList.add('userFlash')
    setTimeout(()=>{
        color.classList.remove('userFlash')
    },200)
}
function showColor(){
    let color=this;
    let button=color.getAttribute('id')
    userFlash(color);
    userArr.push(button)
    console.log(userArr);
    checkColor(userArr.length-1)
}

function checkColor(idx){
    console.log("current level: ",levelNo);
    console.log(gameArr);
    if(userArr[idx]==gameArr[idx]){
        if(userArr.length==gameArr.length){
            score++
            setTimeout(game,500);

        }
    } else{

        endgame()
    }
}

function endgame(){
    let isRed=true;
    interval=setInterval(()=>{
       document.body.style.backgroundColor=isRed?"red":"white"
       isRed=!isRed
    },100)

    setTimeout(()=>{
        clearInterval(interval)
        document.body.style.backgroundColor='white';
    },400)
    gameArr=[]
    userArr=[];
    level.innerHTML="Game Over! Press any key to continue"
    playGame=false;
    totalScore.innerHTML=`Total Score: ${score}`
    levelNo=0
    score=0
}
// isRed=false;
// interval=setInterval(()=>{
//     document.body.style.backgroundColor=isRed?'white':'red';
//     isRed=!isRed;
// },100)