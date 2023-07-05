// Mail
// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.
// // Usiamo un input in html per inserire la mail da cercare.



// creo array di e-mail 
const arrayEmail = ["mariorossi@gmail.com", "giovannigalli@gmail.com", "stefanograssi@tiscali.it","lucabianchi@libero.it", "carlovanzini@yahoo.com"];

// seleziono button genera per creare evento al click 
const genera = document.querySelector(".genera")

// genero evento al click
genera.addEventListener("click", function () {
   
// 'chiedo all'utente la sua mail
const getEmail = document.querySelector("[name='e-mail']");
const insertEmail = getEmail.value;
let emailFind = false;

// // creo costante email utente corretta per poter accedere 

for (let i = 0; i < arrayEmail.length; i++) {
//    console.log(arrayEmail[i]);
const currentEmail = arrayEmail[i];
if (insertEmail  === currentEmail ) {
  console.log("email trovata " + 1);
  emailFind = true;
}   
};
if (emailFind === true) {
  document.getElementById("mail_message").innerHTML = "E-MAIL TROVATA"; 

}else{
    document.getElementById("mail_message").innerHTML = "E-MAIL NON TROVATA";  
}

});


// seleziono button annulla per creare evento al click 
const annulla = document.querySelector(".annulla")

annulla.addEventListener("click", function () {
 
    function Refresh() {
        window.parent.location = window.parent.location.href;
     
    }
    
});





