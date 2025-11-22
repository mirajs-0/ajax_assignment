function generateTable() {
  let number = parseInt(prompt("Enter a positive integer:"));

  if (isNaN(number) || number <= 0) {
    document.getElementById("tableContainer").innerHTML =
      "<p id='errorMessage'>Please enter a valid positive integer.</p>";
    return;
  }

  let multTable = "<table>";

  // Outer loop for rows (1 to number)
  for (let i = 1; i <= number; i++) {
    multTable += "<tr>";

    // Inner loop for columns (1 to number)
    for (let j = 1; j <= number; j++) {
      let product = i * j;
      multTable += `<td>${product}</td>`;
    }

    multTable += "</tr>";
  }

  multTable += "</table>";

  // Display the table in the HTML document
  document.getElementById("tableContainer").innerHTML = multTable;
}
