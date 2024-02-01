'use strict';

// document.querySelector('.message').textContent='🏯 Boank';
// document.querySelector('.score').textContent = 69
let score=20 ;
let cur=Math.trunc(Math.random()*100)+1;
let highscore=0;
let message='';
document.querySelector('.check').addEventListener('click',()=>{
    
    const num=Number(document.querySelector('.guess').value);
    if(score>1){
        if(!num){
            message=`⛔ No Number Provided`;
        } else if(num==cur){
            message=`🎉Correct Number🎉`;
            document.querySelector('.number').textContent = cur;
            document.querySelector('body').style.backgroundColor='#60b347';
            document.querySelector('.number').style.width='30rem';
            if(highscore<score){
                highscore=score;
                document.querySelector('.highscore').textContent=highscore;
            }
            // score++;
        } else if(num!=cur){
            message=(num>cur)?`⬆️Too High`:`⬇️Too Low`;
            score--;
        } 
        document.querySelector('.score').textContent=score;
    } else{
        message=`👿You Lost the game`;
    }
    document.querySelector('.message').innerHTML=message;
})
document.querySelector('.again').addEventListener('click',()=>{
    score=20;
    cur=Math.trunc(Math.random()*100)+1;
    document.querySelector('.message').innerHTML=`Start guessing...`;
    document.querySelector('.score').textContent=score;
    document.querySelector('.number').textContent='?';   
    document.querySelector('.guess').value='';
    document.querySelector('body').style.backgroundColor='#222';
    document.querySelector('.number').style.width='15rem';
})
