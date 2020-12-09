var startFeldName = "Start";
var endeFeldName = "Ende";
var pauseFeldName = "Pause";
var fahrtzeitFeldName = "Fahrtzeit";

function calculateHoursOfWork() {
  var start = getField(startFeldName).value;
  var end = getField(endeFeldName).value;
  var pause = parseFloat(getField(pauseFeldName).value);
  var travelTime = parseFloat(getField(fahrtzeitFeldName).value);

  if (pause < 0) {
    return "Pause ungültig";
  } else if (travelTime < 0) {
    return "Fahrtzeit ungültig";
  }

  var startDate = new Date("January 01, 1970 " + start + ":00");
  var endDate = new Date("January 01, 1970 " + end + ":00");

  var startToEndHours = new Date(endDate - startDate).getTime() / 3600000;

  if (startToEndHours < 0) {
    return "Start > Ende";
  }

  var hoursOfWork = startToEndHours - pause - travelTime;

  return Math.max(hoursOfWork, 0).toFixed(2);
}

event.value = calculateHoursOfWork();
