// Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

// BONUS: far inserire 3 numeri all’utente, generare per il pc 3 numeri, e dopo aver calcolato la somma dei numeri dell’utente e dei numeri del pc, capire chi ha vinto in base alla somma maggiore.


//                 BONUS SENZA ARRAY //
// // genero numero random per giocatore
// const playerNumber = Math.floor(Math.random() * 6 + 1);
// document.getElementById("player").innerHTML =  playerNumber;


// // genero numero pc 
// const pcNumber = Math.floor(Math.random() * 6 + 1)  ;
// document.getElementById("Pc").innerHTML =  pcNumber;


// // chiedo 3 numeri da 1 a 6 all'utente
// const firstNumber =  parseInt(prompt("Inserisci un numero da 1 a 6 "));
// const secondNumber = parseInt(prompt("Inserisci un numero da 1 a 6 "));
// const thirdNumber =  parseInt(prompt("Inserisci un numero da 1 a 6 "));

// // sommo i numeri inseriti dall'utente 
// const sumPlayerNumbers = firstNumber + secondNumber + thirdNumber ;

// // stampo in pagina la somma dei numeri utente
// document.getElementById("player").innerHTML =  sumPlayerNumbers;

// // genero 3 numeri random da 1 a 6 per il pc
// const pcFirstNumber = Math.floor(Math.random() * 6 + 1);
// const pcSecondNumber = Math.floor(Math.random() * 6 + 1);
// const pcThirdNumber = Math.floor(Math.random() * 6 + 1) ;

// // sommo i numeri del pc 
// const pcSumNumber = pcFirstNumber + pcSecondNumber + pcThirdNumber;

// // stampo la somma dei numeri del pc 
// document.getElementById("Pc").innerHTML =  pcSumNumber;

// if (pcSumNumber > sumPlayerNumbers) {
//     console.log("ha vinto il pc");
// }else if (sumPlayerNumbers > pcSumNumber ) {
//     console.log("ha vinto il giocatore");
// }else{
//     console.log("pari");
// }
 

            // BONUS CON ARRAY //
            const getFirstNum = document.querySelector("[name='num1']");
const insertFirstNum = getFirstNum.value;
const getSecNum = document.querySelector("[name='num2']");
const insertSecNum = getSecNum.value;
const getThNum = document.querySelector("[name='num3']");
const insertThNum = getThNum.value;

const genera =  document.querySelector(".genera")
genera.addEventListener("click", function () {
let container = [];

// const getFirstNum = document.querySelector("[name='num1']");
// const insertFirstNum = getFirstNum.value;
// const getSecNum = document.querySelector("[name='num2']");
// const insertSecNum = getSecNum.value;
// const getThNum = document.querySelector("[name='num3']");
// const insertThNum = getThNum.value;
container.push(insertFirstNum, insertSecNum, insertThNum ) 
let sumPlayer = 0;

    
console.log(container);
for (let i = 0; i < container.length; i++) {
    
    sumPlayer += Number(container[i]);
}
// // stampo in pagina la somma dei numeri utente
document.getElementById("player").innerHTML =  sumPlayer;

// genero 3 numeri random da 1 a 6 per il pc
const pcFirstNumber = Math.floor(Math.random() * 6 + 1);
const pcSecondNumber = Math.floor(Math.random() * 6 + 1);
const pcThirdNumber = Math.floor(Math.random() * 6 + 1) ;

// // sommo i numeri del pc 
let pcSumNumber = pcFirstNumber + pcSecondNumber + pcThirdNumber;

// // stampo la somma dei numeri del pc 
document.getElementById("Pc").innerHTML =  pcSumNumber;



if (pcSumNumber >  sumPlayer) {
    document.getElementById("risultato").innerHTML = "ha vinto il pc";
}else if ( sumPlayer > pcSumNumber ) {
    document.getElementById("risultato").innerHTML = "ha vinto il giocatore";
}else{
    document.getElementById("risultato").innerHTML = "pari";
}
})



const annulla =  document.querySelector(".annulla")
annulla.addEventListener("click", function goBack() {
    window.history.go(0);
    document.getElementById("Pc").innerHTML = ""
    document.getElementById("player").innerHTML = ""
    document.getElementById("risultato").innerHTML = ""
    document.getElementById("risultato").innerHTML = ""
    document.getElementById("risultato").innerHTML = ""
    getThNum.value =  "  ";
    getSecNum.value = "  ";
    getFirstNum.value = "  ";
});





