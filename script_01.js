
/*** Rechner */
/*
0. a+b / a-b/ a*b / a/b  // ergebnis c
1. Dateneingabe + -überprüfung :: 
2. Auswahl Rechenart :: 
3. Fkt. Grundrechenarten :: 
4. Ausgabe in Konsole :: check
*/
let a,b,c
a=6
b=2
//Modul 1: Eingabe und Überprüfung

//Modul 2: Auswahl Rechenart 

//Modul 3: Grundrechenarten

//Addition
function addition(a,b) {
    c = a + b;
    return c;
}

//Subtraktion
function subtraktion(a,b) {
    c = a - b;
    return c;
}

//Multiplikation
function multiplikation(a,b) {
    c = a * b;
    return c;
}

//Division
function division(a,b) {
    c = a / b;
    return c;
}

//Modul 4: Konsolenausgabe | Test:
//ausgabe ("hi");
//ausgabe (division(a,b));
function ausgabe(outputStr) {
    console.log(outputStr);
}