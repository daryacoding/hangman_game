const words = ['flapjack', 'eraser', 'ginger'];

let randomWord = Math.floor(Math.random() * words.length + 1);
let word = words[randomWord];
console.log(word);