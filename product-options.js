var holzAuswahlRadioButtonName = "Typ";
var sperrholzPreisFeldName = "SP1";
var lamellePreisFeldName = "LP1";
var massivPreisFeldName = "MP1";
var stueckZahlFeldName = "S1";

function getTotalPrice() {
  var holzAuswahl = getField(holzAuswahlRadioButtonName).value;
  var sperrholzPreis = getField(sperrholzPreisFeldName).value;
  var lamellePreis = getField(lamellePreisFeldName).value;
  var massivPreis = parseFloat(getField(massivPreisFeldName).value);
  var stueckZahl = parseFloat(getField(stueckZahlFeldName).value);

  var preis = stueckZahl;

  switch (holzAuswahl) {
    case "sperrholz":
      preis *= sperrholzPreis;
      break;
    case "lamelle":
      preis *= lamellePreis;
      break;
    case "massiv":
      preis *= massivPreis;
      break;
    default:
      break;
  }

  return preis;
}

event.value = getTotalPrice();
