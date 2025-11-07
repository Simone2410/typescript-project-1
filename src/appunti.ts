const eta1 = Number (prompt ("primo operatore numerico"));
const eta2 = Number (promt ("secondo operatore numerico"));

const somma = (eta1 + eta2);

alert ("risultato operazione"); 


const MAGGIORE_ETA = 18;

// Con questa riga, chiedo all'utente il suo nome.
const nome = prompt("Come ti chiami?"); // Qui un altro commento.

// Con questa riga, stampo a video "Hello, world!".
alert("Hello, " + nome + "!");

const eta = Number(prompt("Quanti anni hai?"));

const a = (eta < MAGGIORE_ETA) || (eta >= 30);
const b = !((eta >= MAGGIORE_ETA) && (eta < 30));


if (eta< MAGGIORE_ETA)
{
    alert("🔞");
}
else if ((eta >= MAGGIORE_ETA) || (nome == "Matteo") && (eta < 30))
{
    alert("🔝");
}
if (eta > MAGGIORE_ETA)
{
    alert("👍");
}

else if (eta == MAGGIORE_ETA)
{
    alert("🔝");
}
else
{
    alert("🔞");
}

// alert(2025 - eta);

const somma = 3 + 5;
const concatenazione = "ciao," + nome + "!";
const uguaglianza = (eta == MAGGIORE_ETA);

alert ("benvenuto nella calcolatrice più figa del mondo. \n" +
    "le funzionalità che offre sono:\n" +
    " - somma\n" +
    "- sottrazione\n" +
    "- moltiplicazione\n" +
    "- divisione");

// iniziamo calcolatrice 
alert ("benvenuto nella calcolatrice più figa del mondo. \n" +
    "le funzionalità che offre sono:\n" +
    " - somma\n" +
    "- sottrazione\n" +
    "- moltiplicazione\n" +
    "- divisione");

const operatore = prompt ("qui c'è il tuo operatore");
const num1 = Number (prompt ("primo operatore numerico"));
const num2 = Number (prompt ("secondo operatore numerico"));

if (operatore == "+")
{
    alert("il risultato é:" + (num1 + num2));
}

else if (operatore == "-")
{
    alert("il risultato é:" + (num1 - num2));
}

else if (operatore == "*")
{
    alert("il risultato é:" + (num1 * num2));
}

else if (operatore == "/")
{
    alert("il risultato è" + (num1 / num2));
}

else
{
    alert("errore");
}

alert("inserisci i tuoi voti scolastci");

// valutazioni media
const voto1 = Number (prompt ("prima votazione"));
if (voto1 >= 1 && voto1 <= 10)
{
    const voto2 = Number (prompt ("seconda votazione"));

    if (voto2 >= 1 && voto2 <= 10)
    {
        const voto3 = Number (prompt ("terza votazione"));

        if (voto3 >= 1 && voto3 <= 10)
        {
            const voto4 = Number (prompt ("quarta votazione"));
            if (voto4 >= 1 && voto4 <= 10)
            {
                const voto5 = Number (prompt ("quinta votazione"));
                if (voto5 >= 1 && voto5 <= 10)
                {
                    const media = ((voto1 + voto2 + voto3 + voto4 + voto5) / 5);
                    alert ("il risultato è: " + media);
                }
                else
                {
                    alert("errore voto5");
                }
            }
            else
            {
                alert("errore voto4");
            }
        }
        else
        {
            alert("errore voto3");
        }
    }
    else
    {
        alert("errore voto2");
    }
}
else
{
    alert("errore voto1");
}
