const expression = false
  ? false
    ? true
    : false
    ? true
    : false
    ? "Hallo"
    : true
  : false;

// let a = 5;
// a += 5;
// kürzt ab a = a + 5;
// a = 10

// ** Aufgabe: ändere die Kondition um die folgende String Value kriegen zu können
// TIPP: manchmal ist es hilfreich ohne Klammern einzusetzen auf der Prinzip link= true, recht= false zu konzentrieren.

// ** Aufgabe 1: wie kann ich true ? (false ? (false ? true : **false**) : false) : false    diesen **false** kriegen?*/
// true ? (false ? (false ? true : false) : false) : false

// ** Aufgabe 2: ändere die Kondition um die folgende String Value kriegen zu können
// false ? false ? true : false ? true : false ? "Hallo" : true : false

// ** Aufgabe 2/
// STEP 1: false ? (false ? true : false ? true : false ? "Hallo" : true ): false   - erste Kondition Klammern einzusetzen un - immer mit erste Kondition
// Hallo zu kriegen!: guck direkte Kondition vor Hallo

// STEP 2: **true** ? (false ? true : false ? true : false? "Hallo" : true ): false     -> erstmal sollte true sein

// STEP 3: true ? (false ? true : false ? true : **true** ? "Hallo" : true ): false       -> nach ersten Step direkte Kondition von Hallo (? vor Hallo)
