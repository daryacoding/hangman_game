const words = ['flapjack', 'eraser', 'ginger'];
const letters = 'abcdefghijklmnopqrstuvwxyz';

let randomWord = Math.floor(Math.random() * words.length);
const word = words[randomWord];

//const startButton = document.querySelector('.start-button');
const gameBoard = document.querySelector('.game-board');
let guessesLeft = 10;
let guesses = document.querySelector('.guesses');
const board = document.querySelector('.board');


/* startButton.addEventListener('click', (evt) =>{
    startGame();
}) */
//board.innerHTML = "hello";

function containsLetter(char){
    let count = 0;
    for (let i = 0; i<words.length; i++){
        if (word.charAt(i) == char){
            count++;
            guesses.innerHTML = `Correct! You have ${guessesLeft} guesses left.`
            //wordOnBoard.split
        }
    }
    if (!word.includes(char)){
        guessesLeft--;
        guesses.innerHTML = `Incorrect! You have ${guessesLeft} guesses left.`
    }
} 

for (let i = 65; i < 91; i++) {
    let button = document.createElement("button");
    button.classList.add("letters");
    //Number to ASCII[A-Z]
    button.innerText = String.fromCharCode(i);
    //character button click
    /* button.addEventListener("click", () => {
      let charArray = chosenWord.split("");
      let dashes = document.getElementsByClassName("dashes");
      //if array contains clciked value replace the matched dash with letter else dram on canvas
      //if (charArray.includes(button.innerText)) {
        //charArray.forEach((char, index) => {
          //if character in array is same as clicked button
          //if (char === button.innerText) {
            //replace dash with letter
            //dashes[index].innerText = char;
            //increment counter
            //winCount += 1;
            //if winCount equals word lenfth
           // if (winCount == charArray.length) {
              //resultText.innerHTML = `<h2 class='win-msg'>You Win!!</h2><p>The word was <span>${chosenWord}</span></p>`;
              //block all buttons
              //blocker();
            //}
          //}
        }); */
        guesses.append(button);
    }
/* a.addEventListener('click', (evt) =>{
    containsLetter('a');
})

b.addEventListener('click', (evt) =>{
    containsLetter('b');
})

c.addEventListener('click', (evt) =>{
    containsLetter('c');
})

d.addEventListener('click', (evt) =>{
    containsLetter('d');
})

e.addEventListener('click', (evt) =>{
    containsLetter('e');
})

f.addEventListener('click', (evt) =>{
    containsLetter('f');
})

g.addEventListener('click', (evt) =>{
    containsLetter('g');
})

h.addEventListener('click', (evt) =>{
    containsLetter('h');
})

i.addEventListener('click', (evt) =>{
    containsLetter('i');
})

j.addEventListener('click', (evt) =>{
    containsLetter('j');
})

k.addEventListener('click', (evt) =>{
    containsLetter('k');
})

l.addEventListener('click', (evt) =>{
    containsLetter('l');
})

m.addEventListener('click', (evt) =>{
    containsLetter('m');
})

n.addEventListener('click', (evt) =>{
    containsLetter('n');
})

o.addEventListener('click', (evt) =>{
    containsLetter('o');
})

p.addEventListener('click', (evt) =>{
    containsLetter('p');
})

q.addEventListener('click', (evt) =>{
    containsLetter('q');
})

r.addEventListener('click', (evt) =>{
    containsLetter('r');
})

s.addEventListener('click', (evt) =>{
    containsLetter('s');
})

t.addEventListener('click', (evt) =>{
    containsLetter('t');
})

u.addEventListener('click', (evt) =>{
    containsLetter('u');
})

v.addEventListener('click', (evt) =>{
    containsLetter('v');
})

w.addEventListener('click', (evt) =>{
    containsLetter('w');
})

x.addEventListener('click', (evt) =>{
    containsLetter('x');
})

y.addEventListener('click', (evt) =>{
    containsLetter('y');
})

z.addEventListener('click', (evt) =>{
    containsLetter('z');
}) */

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
