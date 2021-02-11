
/*** Rechner */
/*
0. a+b / a-b/ a*b / a/b  // ergebnis c
1. Dateneingabe + -überprüfung :: 
2. Auswahl Rechenart :: 
3. Fkt. Grundrechenarten :: 
4. Ausgabe in Konsole :: check
*/



let a, b, c, rechenart;


eingabe(a,b,rechenart);
auswahl(a,b,rechenart);

//Modul 1: Eingabe und Überprüfung
    function eingabe (){
        
        a = parseInt(prompt("Bitte die erste Zahl eingeben:"));
        rechenart = prompt("Bitte Rechenart eingeben (+  -  *  /)");
        b = parseInt(prompt("Bitte die zweite Zahl eingeben:"));
        
        
        return a,b, rechenart;
    }
//Modul 2: Auswahl Rechenart 
    function auswahl(a, b, rechenart){
        
        switch (rechenart) {
            case rechenart = "+":
                ausgabe (addition(a,b));
                break;

            case rechenart = "-":
                ausgabe (subtraktion(a,b));
                break;

            case rechenart = "*":
                ausgabe (multiplikation(a,b));
                break;

            case rechenart = "/":
                ausgabe (division(a,b));
                break; 

            default:
                console.log("Keine gültige Rechenart!")
                break;
        }
    }
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
        
        if (b==0) {
            return ("Durch Null darf nicht geteilt werden!!!"); 
        } else {
            return a / b; 
        } 
    }

//Modul 4: Konsolenausgabe
    function ausgabe(outputStr) {
        if (b==0) {
            console.log(outputStr); 
        } else {
        console.log("Das Ergebnis ist:",outputStr);
        }
}