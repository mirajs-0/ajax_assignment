// Async function to fetch data
async function fetchUserData() {
  try {
    // GET request to the URL
    const response = await fetch("https://reqres.in/api/users/1");

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    // Parse the response JSON
    const data = await response.json();

    // Log the response data to the console
    console.log(data);
  } catch (error) {
    // Catch any errors that occur during the fetch or parsing
    console.error("Error fetching data:", error);
  }
}

// Attach an event listener to the button
document.getElementById("fetchButton").addEventListener("click", fetchUserData);
