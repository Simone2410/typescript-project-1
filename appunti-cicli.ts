let isValid = true;

let somma = 0;
let nvoti = 0;
let media = 0;

while (isValid)
{
    const numero = Number(prompt("Inserisci il voto."));
    if ((numero < 1) || (numero > 10))
    {
        isValid = false;

        alert("Il numero inserito non è valido.");
    }
    else
    {
        somma += numero;
        nvoti += 1;
    }
}

media = somma / nvoti;
alert("La media è: " + media);

let counter = 0;

while (counter < 10)
{
    counter += 1;

    if (counter % 5)
    {
        console.log("counter " + counter + "non è multiplo di 5.");
    }
    else
    {
        console.log("counter " + counter + "è multipli di 5.");
    }
}
console.log ("fine ciclo...");

/**
 * scrivere un programma che stampi nella console del browser,
 * i primi 10 numeri divisibili per 3 a partire
 * dal numero chiesto in input dall'utente
 */

alert ("Ciao! Nella console troverai i primi 10 numeri divisibili per 3 \n" +
    "in base al numero che darai");

const numero = Number (prompt("inserisci il numero."));
if (Number.isNaN (numero))
{
    alert ("non hai inserito un numero valido");
    console.log ("fine ciclo...");
}
counter = 0;
while (counter < 10)
{
    if ((numero % 3) == 0)
    {
        console.log ("numero divisibile per 3: " + numero);
        counter += 1;
    }
}

console.log("fine ciclo...");

// secondo metodo
const MOLTIPLICATORE = 3;
let input = Number(prompt("inserisci il numero di partenza"));

const resto = input % MOLTIPLICATORE;
if (resto != 0)
{
    input += (MOLTIPLICATORE - resto);
}

let count = 0;

while (count < 10)
{
    console.log("numero divisibile per 3: " + input);

    input += MOLTIPLICATORE;
    count += 1;
    /**
 * scrivere un programma che:
 * .1 Dati 2 numeri interi in input (da chiedere all'utente),
 *    calcolare il m.c.m. tra i due.
 * .2 Dati 2 numeri interi in input (da chiedere all'utente),
 *    calcolare il M.C.D. tra i due.
 */

    alert("Ciao! Benvenuto nella calcolatrice \n" +
        "che calcola M.C.M. e M.C.D. tra due numeri interi.");

    const num1 = Number (prompt ("inserisci il primo numero intero"));
    const num2 = Number (prompt ("inserisci il secondo numero intero"));

    let a = num1;
    let b = num2;
    let r: number;

    do
    {
        r = a % b;
        a = b;
        b = r;
    }

    while (r > 0);

    const mcd = a;
    const mcm = (num1 * num2) / mcd;

    console.log ("il M.C.D. tra " + num1 + " e " + num2 + " è: " + mcd);
    console.log ("il M.C.M. tra " + num1 + " e " + num2 + " è: " + mcm);

    console.log ("fine programma...");
}

const MAX = 10;

let index = 0;
while (index < MAX)
{
    console.log("Ciclo #1: " + index);
    index += 1;
}

for (let i = 0; i < MAX; i++) // i += 1; // i = i + 1;
{
    console.log("Ciclo FOR: " + i);
}

index = 0;
do
{
    console.log("Ciclo #2: " + index);
    index += 1;
}
while (index < MAX);
