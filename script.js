const words = ['FLAPJACK', 'GINGER', 'ERASER', 'FOXGLOVE', 'MEGAHERTZ', 'BANDWAGON',
'HAPHAZARD', 'KNAPSACK', 'STRONGHOLD'
];
const letters = 'abcdefghijklmnopqrstuvwxyz';

/* let randomWord = Math.floor(Math.random() * words.length);
let word = words[randomWord]; */

//const startButton = document.querySelector('.start-button');
const gameBoard = document.querySelector('.game-board');
const wordDisplayed = document.querySelector('.display');
const letterContainer = document.querySelector('.letter-container');
//let guessesLeft = 10;
let guesses = document.querySelector('.guesses');
const board = document.querySelector('.board');
const hangmanContainer = document.querySelector('.hangman-container');
const newButton = document.querySelector('#new-game');
let count = 0;
let winCount = 0;

/* startButton.addEventListener('click', (evt) =>{
    startGame();
}) */
//board.innerHTML = "hello";

/* let dashes = "";
        for (let i = 0; i < word.length; i++) {
            dashes += '_';
        } */
//called when page loads
const loadGame = () => {
    winCount = 0;
    count = 0;
    let randomWord = Math.floor(Math.random() * words.length);
    let word = words[randomWord];
    let dashes = "";
        for (let i = 0; i < word.length; i++) {
            dashes += '_';
        }
    letterContainer.classList.remove('hide');
    letterContainer.innerHTML = "";
    guesses.innerHTML = "";
    for (let i = 65; i < 91; i++) {
        let button = document.createElement("button");
        button.classList.add("letters");
        button.innerText = String.fromCharCode(i);
        letterContainer.append(button);
        
        wordDisplayed.innerHTML = dashes;
        
        button.addEventListener('click', function() {
            dashes = [...dashes];
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
            guesses.innerHTML = `You lose! The word was ${word}`;
            blockAllButtons();
            newButton.style.display = 'block';
            //newGame();
           }
           if (winCount == word.length){
                guesses.innerHTML = "You win!";
                blockAllButtons();
                newButton.style.display = 'block';
                //newGame();
           }
           button.disabled = true;
        });
    }
    let { initialDrawing } = canvasCreator();
  //initialDrawing would draw the frame
  initialDrawing();
}

window.onload = loadGame;

const blockAllButtons = () => {
    const buttons = document.getElementsByTagName('button');
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].disabled = true;
    }
}

const newGame = () => {
    /* const newGameBtn = document.createElement('button');
    newGameBtn.innerText = 'New Game';
    newGameBtn.style.width = '100px';
    newGameBtn.style.height = '50px';
    newGameBtn.style.left = '100px';
    newGameBtn.style.right = '150px';
    document.body.append(newGameBtn); */
    //newGameBtn.addEventListener('click', loadGame);
    
    loadGame();
}

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
        context.arc(185, 45, 10, 0, Math.PI * 2, true);
        context.stroke();
    };
    const body = () => {
        drawLine(185, 55, 185, 120);
    };
    const leftArm = () => {
        drawLine(185, 70, 140, 100);
    };
    const rightArm = () => {
        drawLine(185, 70, 230, 100);
    };
    const leftLeg = () => {
        drawLine(185, 120, 70, 300);
    };
    const rightLeg = () => {
        drawLine(185, 120, 300, 300);
    };
    //initial frame
    const initialDrawing = () => {
      //clear canvas
      context.clearRect(0, 0, context.canvas.width, context.canvas.height);
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

newButton.addEventListener('click', function(){
    newGame();
    newButton.style.display = 'none';
})