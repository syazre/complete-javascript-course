const check = document.querySelector('.check');
let secretNumber = Math.trunc(Math.random()*20) + 1;
console.log(secretNumber);

let score = Number(document.querySelector('.score').textContent);

const displayMessage = function(message) {
    document.querySelector('.message').textContent = message;
}

check.addEventListener('click', function() {
    const guess = document.querySelector('.guess').value;
    let highscore = Number(document.querySelector('.highscore').textContent);

    if(!guess) {
        // document.querySelector('.message').textContent = "No number...🤷‍♀️";
        displayMessage("No number...🤷‍♀️");
    } else if (guess == secretNumber) {
        document.querySelector('.message').textContent = "Correct number 🎉";
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('.number').style.width = "30rem";
        document.body.style.backgroundColor = "#60b347";
        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        } 
    } else if (guess != secretNumber){
        document.querySelector('.message').textContent = guess > secretNumber ? "Number too high ❗" : "Number too low ❗";
        score--;
        if (score < 1) {
            document.querySelector('.score').textContent = 0;
            document.querySelector('.message').textContent = "You lose ❌";
        } else {
            document.querySelector('.score').textContent = score;
        }

    } /* else if (guess > secretNumber) {
        document.querySelector('.message').textContent = "Number too high ❗";
        score--;
        if (score < 1) {
            document.querySelector('.score').textContent = 0;
            document.querySelector('.message').textContent = "You lose ❌";
        } else {
            document.querySelector('.score').textContent = score;
        }
        
    } else if (guess < secretNumber) {
        document.querySelector('.message').textContent = "Number too low ❗";
        score--;
        if (score < 1) {
            document.querySelector('.score').textContent = 0;
            document.querySelector('.message').textContent = "You lose ❌";
        } else {
            document.querySelector('.score').textContent = score;
        }
    } */
});

const again = document.querySelector('.again');
again.addEventListener('click', function() {
    
    score = 20;
    secretNumber = Math.trunc(Math.random()*20) + 1;
    console.log(secretNumber);  

    document.querySelector('.message').textContent = "Start guessing...";
    document.body.style.backgroundColor = "#222";
    document.querySelector('.score').textContent = score;
    document.querySelector('.guess').value = '';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.number').style.width = "15rem";
    
});

///////////////////////////////////////
// Coding Challenge #1

/* 
Implement a game rest functionality, so that the player can make a new guess! Here is how:
1. Select the element with the 'again' class and attach a click event handler
2. In the handler function, restore initial values of the score and secretNumber variables
3. Restore the initial conditions of the message, number, score and guess input field
4. Also restore the original background color (#222) and number width (15rem)
GOOD LUCK 😀
*/