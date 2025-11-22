var convertBtn = document.getElementById("convertBtn");
var celsiusInput = document.getElementById("celsius");

// Run the conversion
convertBtn.onclick = function () {
  var celsius = celsiusInput.value;

  // Check if the input is empty or not a number
  if (celsius === "" || isNaN(celsius)) {
    alert("Please enter a valid number for Celsius.");
  } else {
    // Convert Celsius to Fahrenheit
    var fahrenheit = (celsius * 9) / 5 + 32;

    // Convert Celsius to Kelvin
    var kelvin = parseFloat(celsius) + 273.15;

    document.getElementById("celsiusResult").innerText =
      "Temperature in Celsius: " + celsius + "°C";
    document.getElementById("fahrenheitResult").innerText =
      "Temperature in Fahrenheit: " + fahrenheit + "°F";
    document.getElementById("kelvinResult").innerText =
      "Temperature in Kelvin: " + kelvin + " K";
  }
};
