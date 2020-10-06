/*
roll the dic and hold the value with out rolling
 1 which makes your current score to zero
*/
//wnen the game init all to zero
var scores,roundscore,activeplayer,imagePath;
scores=[0,0];
roundscore=0;
activeplayer=0;

imagePath=document.querySelector(".dice");
imagePath.style.display="none";

document.getElementById("score-"+activeplayer).textContent=0;
document.getElementById("current-"+activeplayer).textContent=0;
document.getElementById("score-"+activeplayer).textContent=0;
document.getElementById("score-"+activeplayer).textContent=0;
document.querySelector(".btn-roll").addEventListener("click",function(){
//generating random number and using to change the dice
    diceImage=Math.floor(Math.random()*6)+1;
    document.querySelector("#current-"+ activeplayer).textContent=diceImage;
    imagePath.style.display="block";
    imagePath.src="images/Dice"+diceImage+".png";
});