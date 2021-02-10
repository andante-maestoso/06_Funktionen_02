
/*** Rechner */
/*
0. a+b / a-b/ a*b / a/b  // ergebnis c
1. Dateneingabe + -überprüfung :: 
2. Auswahl Rechenart :: 
3. Fkt. Grundrechenarten :: 
4. Ausgabe in Konsole :: check
*/
let a,b,c, rechenart
a=6
b=2
rechenart = "mal"
 
//Modul 1: Eingabe und Überprüfung


//Modul 2: Auswahl Rechenart 
//function auswahl(rechenart, a, b){
    switch (rechenart) {
        case rechenart = "plus":
            ausgabe (addition(a,b));
            break;

        case rechenart = "minus":
            ausgabe (subtraktion(a,b));
        break;

        case rechenart = "mal":
            ausgabe (multiplikation(a,b));
            break;

        case rechenart = "geteilt":
            ausgabe (division(a,b));
            break; 

        default:
            console.log("Keine gültige Rechenart!")
            break;
    }
//}
//Modul 3: Grundrechenarten

//Addition
function addition(a,b) {
    return a + b;
}

//Subtraktion
function subtraktion(a,b) {
    return a - b;
}

//Multiplikation
function multiplikation(a,b) {
    return a * b;
}

//Division
function division(a,b) {
    return a / b;
}

//Modul 4: Konsolenausgabe | Test:
//ausgabe ("hi");
//ausgabe (division(a,b));
function ausgabe(outputStr) {
    console.log(outputStr);
}