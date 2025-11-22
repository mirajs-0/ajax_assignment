function arrayOperations() {
  // Create an empty array called numbers
  let numbers = [];

  // Prompt the user to enter five numbers one by one and add them to the numbers array using push()
  for (let i = 1; i <= 5; i++) {
    let num = parseInt(prompt(`Enter Number ${i}:`));
    numbers.push(num);
  }

  // Display the contents of the numbers array in the console and on the page
  console.log("Numbers:", numbers);
  let resultHTML = `<p><strong>Numbers:</strong> ${numbers}</p>`;

  // Prompt the user to enter a number and check if it's included in the array using includes()
  let searchNumber = parseInt(prompt("Enter a Number to Search:"));
  if (numbers.includes(searchNumber)) {
    resultHTML += `<p>Number ${searchNumber} is found in the array.</p>`;
  } else {
    resultHTML += `<p>Number ${searchNumber} is not found in the array.</p>`;
  }

  // Remove the last number from the array using pop()
  numbers.pop();
  resultHTML += `<p><strong>Updated Numbers:</strong> ${numbers}</p>`;

  // Sort the numbers array in ascending order using sort() with a custom comparison function
  numbers.sort((a, b) => a - b); // Sorting numerically in ascending order
  resultHTML += `<p><strong>Sorted Numbers:</strong> ${numbers}</p>`;

  // Display the results in the HTML document
  document.getElementById("result").innerHTML = resultHTML;
}
