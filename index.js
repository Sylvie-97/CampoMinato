const prompt = require('prompt-sync')();

let coordinate = prompt();
//console.log(coordinate);

//let coordinata1=prompt();
//let coordinata2=prompt();
//let posizione;

/*const ConvertiCoordinate = (coordinata1,coordinata2) => {coordinata1==0 ? posizione =(coordinata1*0)+coordinata2 : 
                                                        coordinata1==1 ? posizione=(coordinata1*1)+coordinata2 : 
                                                        posizione=(coordinata1*2)+coordinata2;}*/

let array = new Array(9).fill(0);
array[2]=1;
//console.log(array[2]);

let copiaArray = Array.from(array);
//console.log(copiaArray);

const griglia = (array,passo) => {
    let riga=array.splice(0,passo);
    return riga;
}

const arrayInRighe =(array, passo)=> {
    let divisorio=[];
    for(let i=0; i<=array.length; i=+passo) divisorio.push(griglia(array,passo));
    return divisorio;
}

b=arrayInRighe(array,3);

b.forEach(b => console.log(b));

const controllo = (copiaArray,coordinate) => {
    if(copiaArray[coordinate]===1){
        return "Hai perso";
    }
}

console.log(controllo(copiaArray,coordinate));



//((array[coordinate]==1) ? console.log("Hai perso") : console.log("Vai avanti"));