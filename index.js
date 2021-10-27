let griglia = [0,0,0,1,0,0,0,0,0]
console.log(griglia.length);
let pos = griglia.indexOf(1);
console.log(pos);

const prompt = require('prompt-sync')(); 
let coordinate = prompt();

const risultato = x => pos == coordinate;
console.log(griglia.some(risultato));

if (griglia.some(risultato)== true){
    console.log("hai perso"); 
    console.log(griglia);
}

