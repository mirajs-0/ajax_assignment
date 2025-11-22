function calculateSum() {
  let number = parseInt(prompt("Enter a positive integer:"));

  if (isNaN(number) || number <= 0) {
    document.getElementById("result").innerText =
      "Please enter a valid positive integer.";
    return;
  }

  let sum = 0;

  for (let i = 1; i <= number; i++) {
    sum += i;
  }

  document.getElementById("result").innerText =
    "The sum of natural numbers up to " + number + " is: " + sum;
}
