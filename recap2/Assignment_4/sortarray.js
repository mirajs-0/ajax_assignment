function sortArray(numbers) {
  return numbers.slice().sort((a, b) => a - b); // Sort in ascending order
}

const numbers = [5, 2, 8, 1, 9];

console.log("Original Array:", numbers);

// Sort the array
const sortedArray = sortArray(numbers);

console.log("Sorted Array (Ascending):", sortedArray);

document.getElementById("original-array").textContent = numbers.join(", ");
document.getElementById("sorted-array").textContent = sortedArray.join(", ");
