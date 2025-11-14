/**
 * chiedere all'utente un indice tra 0 e 4 (compresi).
 * 
 * chiedere un nuovo valore da salvare.
 * sostituire quel valore all'indice corretto.
 */

const array = [9, 2, 12, 5, 100];
const primovalore = Number (prompt ("inserisci un indice tra 0 e 4 (compresi)"));
const nuovoValore = Number (prompt ("inserisci il nuovo valore da salvare"));

array[primovalore] = nuovoValore;

for (let i = 0; i < 5; i++)
{
    console.log(array[i]);
}

