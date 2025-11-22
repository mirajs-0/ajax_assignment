const API_BASE_URL = "https://media2.edu.metropolia.fi/restaurant/api/v1";
const RESTAURANTS_ENDPOINT = `${API_BASE_URL}/restaurants`;

async function fetchData(url) {
  try {
    const response = await fetch(url);
    console.log("API Response:", response); // Debugging line
    if (!response.ok) throw new Error(`Failed to fetch: ${response.status}`);
    const data = await response.json();
    console.log("Fetched Data:", data); // Debugging line
    return data;
  } catch (error) {
    console.error("API Request Error:", error);
    showError("Error fetching data, please try again.");
    throw error;
  }
}

async function loadRestaurants() {
  showLoading(true);
  try {
    const restaurants = await fetchData(RESTAURANTS_ENDPOINT);
    console.log("Restaurants Loaded:", restaurants); // Debugging line
    displayRestaurants(restaurants);
  } catch (error) {
    console.error("Failed to load restaurants:", error);
  } finally {
    showLoading(false);
  }
}

function renderRestaurantCard(restaurant) {
  return `
    <div class="restaurant-card">
      <h3>${escapeHtml(restaurant.name)}</h3>
      <p>${escapeHtml(restaurant.address)}</p>
      <p class="phone">${escapeHtml(
        restaurant.phone || "No phone available"
      )}</p>
      <button class="btn-menu" onclick="openRestaurantModal(${
        restaurant.id
      })">View Menu</button>
    </div>
  `;
}

function displayRestaurants(restaurants) {
  const restaurantGrid = document.getElementById("restaurantList");
  if (!restaurants || restaurants.length === 0) {
    restaurantGrid.innerHTML = "<p>No restaurants available.</p>";
    return;
  }
  restaurantGrid.innerHTML = restaurants.map(renderRestaurantCard).join("");
}

function openRestaurantModal(restaurantId) {
  const modal = document.getElementById("restaurantModal");
  modal.classList.remove("hidden");
  loadRestaurantMenu(restaurantId);
}

function closeRestaurantModal() {
  const modal = document.getElementById("restaurantModal");
  modal.classList.add("hidden");
}

async function loadRestaurantMenu(restaurantId) {
  try {
    const menu = await fetchData(
      `${API_BASE_URL}/restaurants/${restaurantId}/menu/fi/daily`
    );
    displayMenu(menu);
  } catch (error) {
    showMenuError("Unable to fetch menu.");
  }
}

function displayMenu(menu) {
  const menuContent = document.getElementById("menuContent");
  menuContent.innerHTML = menu.length
    ? menu.map(renderMenuItem).join("")
    : "<p>No menu available for today.</p>";
}

function showLoading(show) {
  const loadingDiv = document.getElementById("loading");
  loadingDiv.classList.toggle("hidden", !show);
}

function showMenuError(message) {
  const menuError = document.getElementById("menuError");
  menuError.textContent = message;
  menuError.classList.remove("hidden");
}

function escapeHtml(text) {
  if (!text) return "";
  const div = document.createElement("div");
  div.textContent = text;
  return div.innerHTML;
}

document.addEventListener("DOMContentLoaded", function () {
  const closeBtn = document.querySelector(".close");
  closeBtn.addEventListener("click", closeRestaurantModal);
  window.addEventListener("click", function (event) {
    if (event.target === document.getElementById("restaurantModal")) {
      closeRestaurantModal();
    }
  });

  loadRestaurants(); // Call to load the restaurants
});
