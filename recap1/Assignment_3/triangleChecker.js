function checkTriangle() {
  let side1 = parseFloat(prompt("Enter the length of the first side:"));
  let side2 = parseFloat(prompt("Enter the length of the second side:"));
  let side3 = parseFloat(prompt("Enter the length of the third side:"));

  // Check if any of the side lengths are less than or equal to zero
  if (side1 <= 0 || side2 <= 0 || side3 <= 0) {
    document.getElementById("result").innerText =
      "Invalid input! Side lengths must be greater than zero.";
    return;
  }

  // Determine type of triangle
  if (side1 === side2 && side2 === side3) {
    document.getElementById("result").innerText =
      "The triangle is Equilateral.";
  } else if (side1 === side2 || side2 === side3 || side1 === side3) {
    document.getElementById("result").innerText = "The triangle is Isosceles.";
  } else {
    document.getElementById("result").innerText = "The triangle is Scalene.";
  }
}
