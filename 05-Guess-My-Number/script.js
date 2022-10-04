const check = document.querySelector('.check');
let secretNumber = Math.trunc(Math.random()*20) + 1;
console.log(secretNumber);

let score = Number(document.querySelector('.score').textContent);

check.addEventListener('click', function() {
    const guess = document.querySelector('.guess').value;
    let highscore = Number(document.querySelector('.highscore').textContent);

    if(!guess) {
        document.querySelector('.message').textContent = "No number...🤷‍♀️";
    } else if (guess == secretNumber) {
        document.querySelector('.message').textContent = "Correct number 🎉";
        document.querySelector('.number').textContent = secretNumber;
        document.body.style.backgroundColor = "#60b347";
        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        } 
    } else if (guess > secretNumber) {
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
    }
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
    
});