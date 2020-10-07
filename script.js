/*
roll the dic and hold the value with out rolling
 1 which makes your current score to zero
*/
//wnen the game init all to zero
var scores,roundscore,activeplayer,imagePath,gameongoing;
initiation();
imagePath=document.querySelector(".dice");

document.querySelector(".btn-roll").addEventListener("click",function(){
//generating random number and using to change the dice
if(gameongoing){
    diceImage=Math.floor(Math.random()*6)+1;
    document.querySelector("#current-"+ activeplayer).textContent=diceImage;
    imagePath.style.display="block";
    imagePath.src="images/Dice" + diceImage+".png";
if(diceImage>1){
    roundscore+=diceImage;
    document.querySelector("#current-" + activeplayer).textContent=roundscore;
}else{
    nextplayer();
   }

}
});
document.querySelector(".btn-hold").addEventListener("click",function(){
if(gameongoing){
    scores[activeplayer]+=roundscore;
document.querySelector("#score-"+activeplayer).textContent=scores[activeplayer];

if(scores[activeplayer]>=100){
document.querySelector("#name-"+activeplayer).textContent="winner!"
imagePath.style.display="none";
 document.querySelector(".player-"+activeplayer+"-panel").classList.add("winner");
 document.querySelector(".player-"+activeplayer+"-panel").classList.remove("active");
gameongoing=false;
}else{
nextplayer();
}}
});
function nextplayer(){
    roundscore=0;
    activeplayer===0? activeplayer=1:activeplayer=0;
    document.getElementById("current-0").textContent="0";
    document.getElementById("current-1").textContent="0";
    document.querySelector(".player-0-panel").classList.toggle("active");
    document.querySelector(".player-1-panel").classList.toggle("active");
    imagePath.style.display="none";
    
}
document.querySelector(".btn-new").addEventListener("click",initiation)
function initiation(){
    gameongoing=true;
    
    scores=[0,0];
    roundscore=0;
    activeplayer=0;
    imagePath=document.querySelector(".dice");

    imagePath.style.display="none";
    
    document.getElementById("score-"+activeplayer).textContent="0";
    document.getElementById("current-"+activeplayer).textContent="0";
    document.getElementById("score-1").textContent="0";
    document.getElementById("score-1").textContent="0";
    document.querySelector("#name-"+0).textContent="player1"
    document.querySelector("#name-"+1).textContent="player2"
    document.querySelector(".player-0-panel").classList.remove("winner");
    document.querySelector(".player-1-panel").classList.remove("winner");
    document.querySelector(".player-0-panel").classList.remove("active");
    document.querySelector(".player-1-panel").classList.remove("active");
    document.querySelector(".player-0-panel").classList.add("active");
 
    
}