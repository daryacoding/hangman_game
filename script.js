const words = ['flapjack', 'eraser', 'ginger'];

let randomWord = Math.floor(Math.random() * words.length);
let word = words[randomWord];

const startButton = document.querySelector('.start-game');

startButton.addEventListener('click', (evt) =>{
    easyMode();
    mediumMode();
    hardMode();
})

function easyMode (){
    // 1. Create the button
    const easyButton = document.createElement("button");
    easyButton.innerHTML = "Easy";

    // 2. Append somewhere
    const body = document.getElementsByTagName("body")[0];
    body.appendChild(easyButton);

    // 3. Add event handler
    easyButton.addEventListener ("click", function() {
    alert("did something");
    });
}
function mediumMode (){
    // 1. Create the button
    const mediumButton = document.createElement("button");
    mediumButton.innerHTML = "Hard";

    // 2. Append somewhere
    const body = document.getElementsByTagName("body")[0];
    body.appendChild(mediumButton);

    // 3. Add event handler
    mediumButton.addEventListener ("click", function() {
    alert("did something");
    });
}

function hardMode (){
    // 1. Create the button
    const hardButton = document.createElement("button");
    hardButton.innerHTML = "Hard";

    // 2. Append somewhere
    const body = document.getElementsByTagName("body")[0];
    body.appendChild(hardButton);

    // 3. Add event handler
    hardButton.addEventListener ("click", function() {
    alert("did something");
    });
}