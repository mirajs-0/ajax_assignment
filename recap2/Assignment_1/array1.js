function arrayOperations() {
  let fruits = ["apple", "banana", "orange", "grape", "kiwi"];

  // Displaying the contents of the fruits array
  console.log("Fruits:", fruits);

  // Displaying the length of the fruits array
  console.log("Length of Fruits:", fruits.length);

  // Accessing and displaying the element at index 2
  console.log("Element at Index 2:", fruits[2]);

  // Accessing and displaying the last element in the fruits array
  console.log("Last Element of Fruits:", fruits[fruits.length - 1]);

  // Create an empty vegetables array
  let vegetables = [];

  // Prompt the user to enter three vegetables
  for (let i = 0; i < 3; i++) {
    let vegetable = prompt("Enter a vegetable:");
    vegetables.push(vegetable);
  }

  // Display the contents of the vegetables array
  console.log("Vegetables:", vegetables);

  // Display the length of the vegetables array
  console.log("Length of Vegetables:", vegetables.length);

  // Display results on the HTML document
  document.getElementById("result").innerHTML = `
        <p>Fruits: ${fruits}</p>
        <p>Length of Fruits: ${fruits.length}</p>
        <p>Element at Index 2: ${fruits[2]}</p>
        <p>Last Element of Fruits: ${fruits[fruits.length - 1]}</p>
        <p>Vegetables: ${vegetables}</p>
        <p>Length of Vegetables: ${vegetables.length}</p>
    `;
}
