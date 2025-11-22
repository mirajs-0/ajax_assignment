let numbers = [];
let evenNumbers = [];

while (true) {
  let userInput = prompt("Enter a number (or 'done' to finish):");

  // If the user enters 'done', exit the loop
  if (userInput.toLowerCase() === "done") {
    break;
  }

  // Convert the user input to a number
  let num = parseInt(userInput);

  // Check if the input is a valid number
  if (!isNaN(num)) {
    numbers.push(num);
  } else {
    alert("Please enter a valid number.");
  }
}

for (let num of numbers) {
  if (num % 2 === 0) {
    evenNumbers.push(num);
  }
}

let outputDiv = document.getElementById("output");

if (evenNumbers.length > 0) {
  outputDiv.innerHTML = "Even Numbers: " + evenNumbers.join(", ");
} else {
  outputDiv.innerHTML = "Even Numbers: None";
}
