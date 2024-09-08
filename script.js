'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent =  
// 'Correct Number';
// document.querySelector('.number').textContent = 13
// document.querySelector('.score').textContent = 21

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

const secret_number = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let restart_score = score
let initial_message = 'Guess My Number!'
let highscore = 0;

const x = function () {
    console.log(23)
}

document.querySelector('.check').addEventListener('click',
    function () {
        const guess = Number(document.querySelector('.guess').value);
        console.log(guess);

        // Empty input
        if (!guess) {
            document.querySelector('.message').textContent =
                'No number!👀';
            // Win
        } else if (guess === secret_number) {
            document.querySelector('.message').textContent =
                'Correct Number✔';
            document.querySelector('.number').textContent = secret_number;

            document.querySelector('body').style.backgroundColor = '#60b347';
            document.querySelector('.number').style.width = '30rem'

            if(score > highscore){
                highscore=score;
                document.querySelector('.highscore').textContent = highscore;
            }
            

            // Too high
        } else if (guess > secret_number) {
            document.querySelector('.message').textContent =
                'Too High!🚀'
            score--;
            if (score === 0) {
                document.querySelector('.message').textContent =
                    'Game Over!🤷‍♀️'
                score = restart_score
            }

            document.querySelector('.score').textContent = score
            // Too low
        } else if (guess < secret_number) {
            document.querySelector('.message').textContent =
                'Too low!🤷‍♀️'
            score--;
            if (score === 0) {
                document.querySelector('.message').textContent =
                    'Game Over!🤷‍♀️'
                score = restart_score
            }
            document.querySelector('.score').textContent = score
        }
    });



document.querySelector('.again').addEventListener('click', 
    function (){
        document.querySelector('.score').textContent = restart_score;
        document.querySelector('.message').textContent = initial_message;

        document.querySelector('body').style.backgroundColor = '#222';
        document.querySelector('.number').style.width = '15rem';
        document.querySelector('.number').textContent = '?';
        
        document.querySelector('.guess').value='';
        });