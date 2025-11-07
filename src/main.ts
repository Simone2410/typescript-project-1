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
