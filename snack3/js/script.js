// 1. l'utente inserisce un numero
var numero = parseInt(prompt("Inserisci un numero"));

// 2. controllo se numero e' pari o dispari
// 3. se il numero è pari, stampa, se è dispari stampa il numero successivo
if (numero % 2 == 0){
  console.log(numero);
} else {
  console.log(numero + 1);
}
