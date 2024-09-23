/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

const num1 = 1;
const num2 = 2;

if (num1 > num2) {
  console.log("questo è il numero più grande", num1);
} else if (num2 > num1) {
  console.log("questo è il numero più grande", num2);
} else {
  console.log("i numeri sono uguali", num1, num2);
}

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

const num5 = 5;
let num3 = 3;
let numeroDiversoDalCinque = num3 === 5 ? console.log("equal") : console.log("not equal");

if (num3 !== num5) {
  console.log("not equal");
} else {
  console.log("equal");
}

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/

let num6 = 10;
let resto = num6 % 5;
if (num6 % 5 === 0) {
  console.log("il numero dato ", num6, " è perfettamente divisibile per 5. Il resto è ", resto);
} else {
  console.log("il numero dato ", num6, " non è divisibile per 5. Il resto è", resto);
}

/*
const numDivisibilePerCinque = 10;
if (numDivisibilePerCinque % 5 === 0) {
  console.log("il numero è divisibile per cinque");
} else {
  console.log("il numero non è divisibile per cinque");
}
*/

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

const num4 = 12;
const num8 = 4;
if (num4 === 8 || num8 === 8) {
  console.log("uno dei numeri è uguale a 8");
} else if (num4 + num8 === 8 || num4 - num8 === 8) {
  console.log("l'addizione/sottrazione dei numeri è uguale a 8");
}

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

const totalShoppingCart = 51;

if (totalShoppingCart > 50) {
  totale = totalShoppingCart;
  console.log("la spedizione è gratuita, il suo totale è di", totale, "euro");
} else if (totalShoppingCart < 50) {
  totale = totalShoppingCart + 10;
  console.log("il suo totale è di", totale, "euro");
}

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

// let percentuale = 20;
// let totale = (percentuale / 100) * totalShoppingCart;

// if (totalShoppingCart >= 50) {
//   console.log("la spedizione è gratuita, il totale è di", totale, "euro");
// } else if (totalShoppingCart < 50) {
//   totale = totalShoppingCart + 10;
//   console.log("il suo totale è di", totale, "euro");
// }

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

const a = 3;
const b = 2;
const c = 4;
if (a > b && a > c) {
  console.log(a, b, c);
} else if (b > a && b > c) {
  console.log(b, a, c);
} else if (c > a && c > b) {
  console.log(c, a, b);
}

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

const whatIsIt = 5;
console.log(typeof whatIsIt);

if (typeof whatIsIt === "number") {
  console.log("è un numero");
} else {
  console.log("non è un numero");
}
/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

const num = 3;
if (num % 2 === 0) {
  console.log("il numero è", num, "ed è pari");
} else {
  console.log("questo numero è", num, "ed è dispari");
}

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.*/

let val = 4;
if (val < 5) {
  console.log("Meno di 5");
} else if (val < 10) {
  console.log("Meno di 10");
} else {
  console.log("Uguale a 10 o maggiore");
}

//MODIFICA FATTA con la sostituzione del (val < 5) all'if e (val < 10) all'else if

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: "John",
  lastName: "Doe",
  skills: ["javascript", "html", "css"],
};

me.city = "napoli";
console.log(me);

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

delete me.lastName;
console.log(me);

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

me.skills.pop();
console.log(me);

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

let arr = [];

for (let i = 0; i <= 10; i++) {
  arr.push(i);
}
console.log(arr);

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

arr.splice(arr[arr.length - 1], 1, 100);
console.log(arr);

/* SCRIVI QUI LA TUA RISPOSTA */
