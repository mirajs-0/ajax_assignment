function sortArray(numbers, order) {
  if (order === "asc") {
    return numbers.slice().sort((a, b) => a - b); // Sort in ascending order
  } else if (order === "desc") {
    return numbers.slice().sort((a, b) => b - a); // Sort in descending order
  } else {
    console.log("Invalid order parameter. Please use 'asc' or 'desc'.");
    return [];
  }
}

const numbers = [5, 2, 8, 1, 9];

console.log("Original Array:", numbers);

const sortedArrayAsc = sortArray(numbers, "asc");

const sortedArrayDesc = sortArray(numbers, "desc");

console.log("Sorted Array (Ascending):", sortedArrayAsc);
console.log("Sorted Array (Descending):", sortedArrayDesc);

document.getElementById("original-array").textContent = numbers.join(", ");
document.getElementById("sorted-asc").textContent = sortedArrayAsc.join(", ");
document.getElementById("sorted-desc").textContent = sortedArrayDesc.join(", ");
