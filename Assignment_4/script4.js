// Reusable fetchData function
async function fetchData(url, options) {
  try {
    const response = await fetch(url, options);

    // Check if the response is successful
    if (!response.ok) {
      throw new Error(`Error: ${response.status} - ${response.statusText}`);
    }

    // Return the response data as JSON
    return await response.json();
  } catch (error) {
    console.error("Fetch Error:", error.message);
    throw error; // Re-throw the error for further handling
  }
}

// Function to trigger the API call when the button is clicked
document
  .getElementById("fetchDataBtn")
  .addEventListener("click", async function () {
    try {
      const user = {
        name: "John Doe",
        job: "Developer",
      };

      const url = "https://reqres.in/api/users?api_key=reqres-free-v1";
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      };

      const userData = await fetchData(url, options);
      console.log(userData);

      // Display success message
      const responseMessage = document.getElementById("responseMessage");
      responseMessage.classList.add("success");
      responseMessage.textContent = `User Fetched! Name: ${userData.name}, Job: ${userData.job}`;
      responseMessage.style.display = "block";
    } catch (error) {
      const responseMessage = document.getElementById("responseMessage");
      responseMessage.classList.remove("success");
      responseMessage.textContent = `An error occurred: ${error.message}`;
      responseMessage.style.display = "block";
    }
  });
