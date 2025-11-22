function calculateDistance() {
  // Ask the user to input the coordinates for both points
  let point1 = prompt(
    "Enter the coordinates of the first point (x1, y1) separated by a comma:"
  );
  let point2 = prompt(
    "Enter the coordinates of the second point (x2, y2) separated by a comma:"
  );

  // Split the input strings to get x and y values for both points
  let [x1, y1] = point1.split(",").map(Number);
  let [x2, y2] = point2.split(",").map(Number);

  // Calculate the Euclidean distance
  let distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));

  document.getElementById("result").innerText =
    "The Euclidean distance between the points is: " + distance.toFixed(2);
}
