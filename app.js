/*Palindroma
Chiedere all’utente di inserire una parola 
Creare una funzione per capire se la parola inserita è palindroma
Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. Generiamo un numero random (sempre da 1 a 5) per il 
computer (usando una funzione). 
Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto.
Consigli del giorno
Scriviamo sempre in italiano i passaggi che vogliamo fare
Scriviamo sempre solo un pezzetto di codice alla volta, se funziona allora andiamo avanti.*/


//# Palindroma
//- Chiedere all'utente di inserire una parola attraverso un prompt
let userWord = prompt('Inserisci una parola');
//- creare un array formato dalle lettere della parola dell'utente
let wordsArray = userWord.split('');
    //-creare un array reverse
let arrayReverse = wordsArray.reverse();
    //-creare una stringa dell'array utilizzando Join (concatena tutti gli elementi in un array e li restituisce come stringa)
let arrayJoin = arrayReverse.join('');
//- controllare la palindromia
    //- SE la parola inserita dall'utente è identica a arrayJoin
if (userWord === arrayJoin) { //- ALLORA stamperà che la parola è palindroma
    console.log('La parola' + userWord + 'è palindroma');
} else {
    console.log('La parola' + userWord + 'non è palindroma');
}

/* ALTERNATIVA CON CICLO FOR */
/* let userWord = prompt('Inserisci una parola');
let reverse = '';
for (let i = userWord.length -1; i = 0; i--) {
    reverse += userWord[i];
}

if (userWord === reverse) {
    console.log('La parola è palindroma');
} else {
    console.log('La parola non è palindroma');
}*/


//# Pari e Dispari
//- Chiedere all'utente, con un prompt, di scegliere tra pari e dispari, inserendo un numero da 1 a 5
let choose = prompt('Pari o Dispari?');
//- Dichiarire una variabile che sia falsa
let 