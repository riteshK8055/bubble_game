let timer = 60;
let score = 0 ; 
let hitrn = 0;
  document.querySelector("#pbtm").addEventListener('click',function(details){

    let clickedNum = Number(details.target.textContent);
    if(clickedNum === hitrn){

        increaseScore();
        makeBubble();
        getNewHit();
    }

  })


function increaseScore(){

    score += 10;
    document.querySelector("#scoreVal").textContent = score;
}


function getNewHit(){

    hitrn = Math.floor(Math.random()*10);
    document.querySelector("#hitVal").textContent = hitrn;


}


function makeBubble(){

  let clutter = "";
  for(let i = 1; i<= 80; i++){

     let rn = Math.floor(Math.random()*10);
     clutter += `<div class="bubble">${rn}</div>`;

  }

  document.querySelector("#pbtm").innerHTML = clutter;
 }


 function runTimer(){

  let timerInt= setInterval(function(){

        if(timer>0){

            timer--;
        }

        else{

            clearInterval(timerInt);
            document.querySelector("#pbtm").innerHTML = `<h1>Game Over!<br> Your score is ${score} </h1>`;
        }
        document.querySelector("#timerval").textContent = timer;
    },1000);
 }


 makeBubble();
 runTimer();
 getNewHit();
 

