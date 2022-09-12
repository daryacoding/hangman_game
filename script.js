const words = ['flapjack', 'eraser', 'ginger'];
const letters = 'abcdefghijklmnopqrstuvwxyz';

let randomWord = Math.floor(Math.random() * words.length);
const word = words[randomWord];

//const startButton = document.querySelector('.start-button');
const gameBoard = document.querySelector('.game-board');
let guessesLeft = 10;
let guesses = document.querySelector('.guesses');

const a = document.querySelector('.a');
const b = document.querySelector('.b');
const c = document.querySelector('.c');
const d = document.querySelector('.d');
const e = document.querySelector('.e');
const f = document.querySelector('.f');
const g = document.querySelector('.g');
const h = document.querySelector('.h');
const i = document.querySelector('.i');
const j = document.querySelector('.j');
const k = document.querySelector('.k');
const l = document.querySelector('.l');
const m = document.querySelector('.m');
const n = document.querySelector('.n');
const o = document.querySelector('.o');
const p = document.querySelector('.p');
const q = document.querySelector('.q');
const r = document.querySelector('.r');
const s = document.querySelector('.s');
const t = document.querySelector('.t');
const u = document.querySelector('.u');
const v = document.querySelector('.v');
const w = document.querySelector('.w');
const x = document.querySelector('.x');
const y = document.querySelector('.y');
const z = document.querySelector('.z');

/* startButton.addEventListener('click', (evt) =>{
    startGame();
}) */

function containsLetter(char){
    let count = 0;
    for (let i = 0; i<words.length; i++){
        if (word.charAt(i) == char){
            count++;
            guesses.innerHTML = `Correct! You have ${guessesLeft} guesses left.`
        }
    }
    if (!word.includes(char)){
        guessesLeft--;
        guesses.innerHTML = `Incorrect! You have ${guessesLeft} guesses left.`
    }
} 

a.addEventListener('click', (evt) =>{
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
})

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

function startGame(){
    gameBoard.innerHTML = `You have ${guessesLeft} guesses`;
    //easyMode();
    //mediumMode();
    //hardMode();
}

function guess(char){
        word.includes(char);
}