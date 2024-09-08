'use strict';

const secret_number = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let restart_score = score
let highscore = 0;

const displayMessage = function(message){
document.querySelector('.message').textContent = message
}
const x = function () {
    console.log(23)
}

document.querySelector('.check').addEventListener('click',
    function () {
        const guess = Number(document.querySelector('.guess').value);
        console.log(guess);

        // Empty input
        if (!guess) {
                displayMessage('No number!👀');
            // Win
        } else if (guess === secret_number) {
            displayMessage('Correct Number✔');
            document.querySelector('.number').textContent = secret_number;
            document.querySelector('body').style.backgroundColor = '#60b347';
            document.querySelector('.number').style.width = '30rem'
           
            if(score > highscore){
                highscore=score;
                document.querySelector('.highscore').textContent = highscore;
            }
            
            // if it is different
        } else if(guess!==secret_number) 
            if (score>1) {
                displayMessage(guess > secret_number ? 'Too High!🚀': 'Too low!🤷‍♀️');
                score--;
                document.querySelector('.score').textContent = score
            }
            else {
                displayMessage('Game Over!🤷‍♀️');
                document.querySelector('.score').textContent = 0;
            }    
        });

document.querySelector('.again').addEventListener('click', 
    function (){
        document.querySelector('.score').textContent = restart_score;
        displayMessage('Start guessing...')
        document.querySelector('body').style.backgroundColor = '#222';
        document.querySelector('.number').style.width = '15rem';
        document.querySelector('.number').textContent = '?';
        document.querySelector('.guess').value='';
        });