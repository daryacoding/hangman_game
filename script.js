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

let count = 0;
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
            count++;
            drawMan(count);
           }
           dashes = dashes.join('');
           wordDisplayed.innerHTML = dashes;
           window.dashes = dashes;
           if (count == 6){
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


const canvasCreator = () => {
    let context = canvas.getContext("2d");
    context.beginPath();
    context.strokeStyle = "#000";
    context.lineWidth = 2;
    //For drawing lines
    const drawLine = (fromX, fromY, toX, toY) => {
        context.moveTo(fromX, fromY);
        context.lineTo(toX, toY);
        context.stroke();
    };
    const head = () => {
        context.beginPath();
        context.arc(180, 40, 10, 0, Math.PI * 2, true);
        context.stroke();
    };
    const body = () => {
        drawLine(180, 50, 180, 80);
    };
    const leftArm = () => {
        drawLine(180, 50, 50, 70);
    };
    const rightArm = () => {
        drawLine(180, 50, 90, 70);
    };
    const leftLeg = () => {
        drawLine(180, 80, 50, 110);
    };
    const rightLeg = () => {
        drawLine(180, 80, 90, 110);
    };
    //initial frame
    const initialDrawing = () => {
      //clear canvas
      context.clearRect(0, 0, context.canvas.width, context.canvas.height);
      //bottom line
      drawLine(10, 130, 130, 130);
      //left line
      drawLine(10, 10, 10, 131);
      //top line
      drawLine(10, 10, 70, 10);
      //small top line
      drawLine(70, 10, 70, 20);
    };
    return { initialDrawing, head, body, leftArm, rightArm, leftLeg, rightLeg };
  };
  //draw the man
  const drawMan = (count) => {
    let { head, body, leftArm, rightArm, leftLeg, rightLeg } = canvasCreator();
    switch (count) {
        case 1:
            head();
            break;
        case 2:
            body();
            break;
        case 3:
            leftArm();
            break;
        case 4:
            rightArm();
            break;
        case 5:
            leftLeg();
            break;
        case 6:
            rightLeg();
            break;
        default:
        break;
    }
};

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
