/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/*
const num1 = 1;
const num2 = 2;

if (num1 > num2) {
  console.log("questo è il numero più grande", num1);
} else if (num2 > num1) {
  console.log("questo è il numero più grande", num2);
} else {
  console.log("i numeri sono uguali", num1, num2);
}
  */

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/*
const num3 = 3;
let numeroDiversoDalCinque = num3 === 5 ? console.log("equal") : console.log("not equal");
**/

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/

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
/*
const num1 = 12;
const num2 = 4;
if (num1 === 8 || num2 === 8) {
  console.log("uno dei numeri è uguale a 8");
} else if (num1 + num2 === 8 || num1 - num2 === 8) {
  console.log("l'addizione/sottrazione dei numeri è uguale a 8");
}
  */

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/*
const totalShoppingCart = 51;
let totale;

if (totalShoppingCart > 50) {
  totale = totalShoppingCart;
  console.log("la spedizione è gratuita, il suo totale è di", totale, "euro");
} else if (totalShoppingCart < 50) {
  totale = totalShoppingCart + 10;
  console.log("il suo totale è di", totale, "euro");
}
  */

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/*
const totalShoppingCart = 51;
let percentuale = 20;
let totale = (percentuale / 100) * totalShoppingCart;

if (totalShoppingCart > 50) {
  console.log("la spedizione è gratuita, il totale è di", totale, "euro");
} else if (totalShoppingCart < 50) {
  totale = totalShoppingCart + 10;
  console.log("il suo totale è di", totale, "euro");
}
  */

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

/*
const me = {
  name: "John",
  lastName: "Doe",
  skills: ["javascript", "html", "css"],
};
*/
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
