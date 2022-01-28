'use strict';

const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
};
const displayScore = function (score) {
    document.querySelector('.score').textContent = score;
};
const displayNumber = function (number) {
    document.querySelector('.number').textContent = number;
};
const generateNumber = function () {
    return Math.trunc(Math.random() * 20) + 1;
};

// Generate random secret number within range 1-20
let secretNumber = generateNumber();
let score = 20;
let highscore = 0;

// Event listener for "Check!" button
document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);

    // No input
    if (!guess) {
        displayMessage('⛔ No number!');

        // Player wins
    } else if (guess === secretNumber) {
        displayMessage('🎉 You won!');
        displayNumber(secretNumber);
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';

        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }

        // Wrong guess
    } else if (guess !== secretNumber) {
        if (score > 1) {
            // document.querySelector('.message').textContent =
            //     guess > secretNumber ? '👆 Too high!' : '👇 Too low!';
            displayMessage(
                guess > secretNumber ? '👆 Too high!' : '👇 Too low!'
            );
            score--;
            displayScore(score);
        } else {
            displayMessage('💥 You lost the game!');
            displayScore(0);
        }
    }
});

document.querySelector('.again').addEventListener('click', function () {
    // Update secret number
    secretNumber = generateNumber();
    score = 20;

    // Reset game conditions
    displayMessage('Start guessing...');
    displayScore(score);
    displayNumber('?');
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
});
