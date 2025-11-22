document
  .getElementById("sendRequestButton")
  .addEventListener("click", sendPostRequest);

async function sendPostRequest() {
  const userData = {
    name: "Miraj",
    job: "Student",
  };

  try {
    // Add the API key as a query parameter to the URL
    const response = await fetch(
      "https://reqres.in/api/users?api_key=reqres-free-v1",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      }
    );

    // Log the status and body of the response for debugging
    console.log("Response Status:", response.status);
    const data = await response.json();
    console.log("Response Data:", data);

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    document.getElementById("response").innerHTML = `<pre>${JSON.stringify(
      data,
      null,
      2
    )}</pre>`;
  } catch (error) {
    console.error("Error:", error);
    document.getElementById("response").innerHTML = `Error: ${error.message}`;
  }
}
