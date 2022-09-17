const words = ['FLAPJACK', 'GINGER', 'ERASER'];
const letters = 'abcdefghijklmnopqrstuvwxyz';

let randomWord = Math.floor(Math.random() * words.length);
let word = words[randomWord];

//const startButton = document.querySelector('.start-button');
const gameBoard = document.querySelector('.game-board');
const wordDisplayed = document.querySelector('.display');
//let guessesLeft = 10;
let guesses = document.querySelector('.guesses');
const board = document.querySelector('.board');

let count = 0;
let winCount = 0;

/* startButton.addEventListener('click', (evt) =>{
    startGame();
}) */
//board.innerHTML = "hello";

function containsLetter(char){
    let count = 0;
    for (let i = 0; i<words.length; i++){
        if (word.charAt(i) == char){
            count++;
            //guesses.innerHTML = `Correct! You have ${guessesLeft} guesses left.`
            
            //wordOnBoard.split
        }
        let index = word.indexOf(char);
    }
    if (!word.includes(char)){
        guessesLeft--;
        guesses.innerHTML = `Incorrect! You have ${guessesLeft} guesses left.`
    }
} 

//called when page loads
const loadGame = () => {
    for (let i = 65; i < 91; i++) {
        let button = document.createElement("button");
        button.classList.add("letters");
        button.innerText = String.fromCharCode(i);
        gameBoard.append(button);
        let dashes = "";
        for (let i = 0; i < word.length; i++) {
            dashes += '_ ';
        }
        wordDisplayed.innerHTML = dashes;

        button.addEventListener('click', () => {
            dashes = [...dashes];
            let wordArray = [...word];
            console.log(button.innerText)
           for(let i = 0; i < word.length; i++){
            if (word[i] === button.innerText){
                dashes[i] = button.innerText;
            }
           }
           let currentDashes = dashes.join('');
           console.log(currentDashes)
           wordDisplayed.innerHTML = currentDashes; 
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
