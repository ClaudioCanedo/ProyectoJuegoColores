/*
Para la práctica de los colores, los mensajes a mostrar como respuesta son los siguientes:

1. Lo siento, no reconozco ese color. Por favor intenta de nuevo!

2. Lo siento, no acertaste esta vez!
    Pista: tu color es alfabeticamente menor/mayor que el mio. Intenta de nuevo.

3. Felicidades! Adivinaste el color.
    Te tomo # intentos terminar el juego!
    Ahora puedes ver el color de fondo :)
    */
var objetivo;
var intentos = 0;
var arrayColor = ["aqua", "black", "blue", "brown", "cyan", "gray", "green", "red", "silver", "yellow"];
var enter_text;
var search_text;
var terminar = false;

function Games() {


    var numRandom = Math.floor(Math.random() *arrayColor.length - 1);
    objetivo = numRandom;
    console.log("el objetivo color es: " +arrayColor[numRandom]);

    while (!terminar) {
        enter_text = prompt("Estoy pensando en uno de estos colores. \n\n" + "aqua, black, blue, brown, cyan, gray, green, red, silver, yellow. \n\n" + "En que color estoy pensando??").toLowerCase();
        search_text = arrayColor.indexOf(enter_text);
        console.log("busqueda enter_text: " + search_text);
        intentos += 1;
        console.log("Num Intentos: " + intentos);
        terminar = Verify_Color();
        setTimeout(document.location.reload(), 5000);
    }
}

function Verify_Color() {
    if (search_text == -1) {
        alert("Lo siento no reconozco tu color. Por favor Intentalo de nuevo");
        return false;
    }
    if (search_text > objetivo) {
        alert("Lo siento, no acertaste esta vez!\n\n"+
              "Pista: tu color es alfabeticamente mayor que el mio.\n\n Intentalo de nuevo.");

        return false;
    }
    if (search_text < objetivo) {
        alert("Lo siento tu color no es correcto!\n\n Tu color es alfabeticamente menor.\n\n Intentalo de nuevo.");

        return false;
    }


    console.log("objetivo: " + arrayColor[objetivo]);
    alert("Lo hiciste el color correcto era: " + arrayColor[objetivo] + "\n\n" +
          " te tomo " + intentos + " Intentos adivinar el color");

    document.body.style.background = arrayColor[objetivo];

    return true;
}
