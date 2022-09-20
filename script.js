const words = ['FLAPJACK', 'GINGER', 'ERASER', 'FOXGLOVE', 'MEGAHERTZ', 'BANDWAGON',
'HAPHAZARD', 'KNAPSACK', 'STRONGHOLD'
];
const letters = 'abcdefghijklmnopqrstuvwxyz';

let randomWord = Math.floor(Math.random() * words.length);
let word = words[randomWord];

//const startButton = document.querySelector('.start-button');
const gameBoard = document.querySelector('.game-board');
const wordDisplayed = document.querySelector('.display');
const letterContainer = document.querySelector('.letter-container');
//let guessesLeft = 10;
let guesses = document.querySelector('.guesses');
const board = document.querySelector('.board');
const hangmanContainer = document.querySelector('.hangman-container');

let guessesLeft = 5;
let winCount = 0;

/* startButton.addEventListener('click', (evt) =>{
    startGame();
}) */
//board.innerHTML = "hello";

let dashes = "";
        for (let i = 0; i < word.length; i++) {
            dashes += '_';
        }
//called when page loads
const loadGame = () => {
    for (let i = 65; i < 91; i++) {
        let button = document.createElement("button");
        button.classList.add("letters");
        button.innerText = String.fromCharCode(i);
        letterContainer.append(button);
        
        wordDisplayed.innerHTML = dashes;
        
        button.addEventListener('click', function() {
            dashes = [...dashes];
            console.log(button.innerText)
           for(let i = 0; i < word.length; i++){
            if (word[i] === button.innerText){
                dashes[i] = button.innerText;
                winCount++;
            }
           }
           if (!word.includes(button.innerText)){
            guessesLeft--;
            guesses.innerHTML = `you have ${guessesLeft} left`;
            const div = document.createElement('div');
            div.style.backgroundColor ='white';
            div.style.position = 'absolute';


            hangmanContainer.appendChild(div);
           }
           dashes = dashes.join('');
           wordDisplayed.innerHTML = dashes;
           window.dashes = dashes;
           if (guessesLeft == 0){
                alert("you lose!");
           }
           if (winCount == word.length){
                guesses.innerHTML = "You win!";
           }
           button.disabled = true;
        });
    }
   /*  let wordBoard = "";
    for (let i = 0; i < word.length; i++) {
        wordBoard += "_ ";
    } */
    //wordDisplayed.innerHTML = wordBoard;
    
}


window.onload = loadGame;

/* function easyMode (){
    // 1. Create the button
    const easyButton = document.createElement("button");
    easyButton.innerHTML = "Easy";

    // 2. Append somewhere
    const startBoard = document.querySelector('.start-game')
    startBoard.appendChild(easyButton);

    // 3. Add event handler
    easyButton.addEventListener ("click", function() {
    alert("did something");
    });
}
function mediumMode (){
    // 1. Create the button
    const mediumButton = document.createElement("button");
    mediumButton.innerHTML = "Medium";

    // 2. Append somewhere
    const startBoard = document.querySelector(".start-game")
    startBoard.appendChild(mediumButton);

    // 3. Add event handler
    mediumButton.addEventListener ("click", function() {
    guesses = 7
    });
}

function hardMode (){
    // 1. Create the button
    const hardButton = document.createElement("button");
    hardButton.innerHTML = "Hard";

    // 2. Append somewhere
    const startBoard = document.querySelector(".start-game")
    startBoard.appendChild(hardButton);

    // 3. Add event handler
    hardButton.addEventListener ("click", function() {
    guesses = 5;

    });
} */
