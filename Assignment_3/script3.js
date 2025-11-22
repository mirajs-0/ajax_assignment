const url = "https://reqres.in/api/unknown/23"; // URL that triggers errors

// Function to handle GET request
async function makeGetRequest() {
  try {
    const responseGet = await fetch(url);
    if (!responseGet.ok) {
      if (responseGet.status === 401) {
        throw new Error(
          "Unauthorized access: Please check your API key or credentials."
        );
      }
      throw new Error(`GET Request failed with status: ${responseGet.status}`);
    }
    const dataGet = await responseGet.json();
    console.log("GET Response:", dataGet);
  } catch (error) {
    console.error("Error occurred:", error.message);
  }
}

// Function to handle POST request
async function makePostRequest() {
  const postData = { name: "Miraj", job: "Student" };
  try {
    const responsePost = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(postData),
    });
    if (!responsePost.ok) {
      throw new Error(
        `POST Request failed with status: ${responsePost.status}`
      );
    }
    const dataPost = await responsePost.json();
    console.log("POST Response:", dataPost);
  } catch (error) {
    console.error("Error occurred:", error.message);
  }
}

// Function to handle PUT request
async function makePutRequest() {
  const putData = { name: "Miraj", job: "Student" };
  try {
    const responsePut = await fetch(url, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(putData),
    });
    if (!responsePut.ok) {
      throw new Error(`PUT Request failed with status: ${responsePut.status}`);
    }
    const dataPut = await responsePut.json();
    console.log("PUT Response:", dataPut);
  } catch (error) {
    console.error("Error occurred:", error.message);
  }
}

// Function to handle DELETE request
async function makeDeleteRequest() {
  try {
    const responseDelete = await fetch(url, { method: "DELETE" });
    if (!responseDelete.ok) {
      throw new Error(
        `DELETE Request failed with status: ${responseDelete.status}`
      );
    }
    const dataDelete = await responseDelete.json();
    console.log("DELETE Response:", dataDelete);
  } catch (error) {
    console.error("Error occurred:", error.message);
  }
}
