// API Configuration
const API_BASE_URL = "https://media2.edu.metropolia.fi/restaurant/api/v1";
const RESTAURANTS_ENDPOINT = `${API_BASE_URL}/restaurants`;

// DOM Elements
const restaurantList = document.getElementById("restaurantList");
const loadingDiv = document.getElementById("loading");
const errorDiv = document.getElementById("error");
const modal = document.getElementById("restaurantModal");
const closeBtn = document.querySelector(".close");

// Store current restaurant ID
let currentRestaurantId = null;

/**
 * Initialize the application
 */
function init() {
  closeBtn.addEventListener("click", closeModal);
  window.addEventListener("click", closeModalOnOutsideClick);
  fetchRestaurants();
}

/**
 * Fetch all restaurants from the API
 */
function fetchRestaurants() {
  showLoading(true);
  hideError();

  fetch(RESTAURANTS_ENDPOINT)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      displayRestaurants(data);
      showLoading(false);
    })
    .catch((error) => {
      console.error("Error fetching restaurants:", error);
      showError(
        "Failed to load restaurants. Please check your VPN connection and try again."
      );
      showLoading(false);
    });
}

/**
 * Display restaurants in the grid
 */
function displayRestaurants(restaurants) {
  restaurantList.innerHTML = "";

  if (!restaurants || restaurants.length === 0) {
    showError("No restaurants found.");
    return;
  }

  restaurants.forEach((restaurant) => {
    const restaurantCard = createRestaurantCard(restaurant);
    restaurantList.appendChild(restaurantCard);
  });
}

/**
 * Create a restaurant card element
 */
function createRestaurantCard(restaurant) {
  const card = document.createElement("div");
  card.className = "restaurant-card";
  card.innerHTML = `
        <h3>${escapeHtml(restaurant.name)}</h3>
        <p>${escapeHtml(restaurant.address)}</p>
        <p class="phone">${escapeHtml(
          restaurant.phone || "No phone available"
        )}</p>
        <button class="btn-menu">View Menu</button>
    `;

  card.querySelector(".btn-menu").addEventListener("click", () => {
    currentRestaurantId = restaurant.id;
    openModal(restaurant);
  });

  return card;
}

/**
 * Open the modal and load the restaurant menu
 */
function openModal(restaurant) {
  document.getElementById("modalRestaurantName").textContent = escapeHtml(
    restaurant.name
  );
  document.getElementById(
    "modalRestaurantAddress"
  ).textContent = `Address: ${escapeHtml(restaurant.address)}`;
  document.getElementById(
    "modalRestaurantPhone"
  ).textContent = `Phone: ${escapeHtml(restaurant.phone || "N/A")}`;

  modal.classList.remove("hidden");
  showMenuLoading(true);
  hideMenuError();

  fetchRestaurantMenu(restaurant.id);
}

/**
 * Close the modal
 */
function closeModal() {
  modal.classList.add("hidden");
  currentRestaurantId = null;
}

/**
 * Close modal when clicking outside of it
 */
function closeModalOnOutsideClick(event) {
  if (event.target === modal) {
    closeModal();
  }
}

/**
 * Fetch the menu for a specific restaurant
 */
function fetchRestaurantMenu(restaurantId) {
  const menuEndpoint = `${API_BASE_URL}/restaurants/${restaurantId}/menu/fi/daily`;

  fetch(menuEndpoint)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      displayMenu(data);
      showMenuLoading(false);
    })
    .catch((error) => {
      console.error("Error fetching menu:", error);
      showMenuError("Failed to load menu. Please try again.");
      showMenuLoading(false);
    });
}

/**
 * Display the menu in the modal
 */
function displayMenu(menuData) {
  const menuContent = document.getElementById("menuContent");
  menuContent.innerHTML = "";

  if (!menuData || menuData.length === 0) {
    menuContent.innerHTML = "<p>No menu available for today.</p>";
    return;
  }

  const menuHTML = menuData
    .map(
      (course) => `
        <div class="menu-course">
            <h4>${escapeHtml(course.courseName)}</h4>
            ${
              course.meals && course.meals.length > 0
                ? `
                <ul class="meals-list">
                    ${course.meals
                      .map(
                        (meal) => `
                        <li>
                            <strong>${escapeHtml(meal.name)}</strong>
                            ${
                              meal.price
                                ? `<span class="price">€${parseFloat(
                                    meal.price
                                  ).toFixed(2)}</span>`
                                : ""
                            }
                            ${
                              meal.allergies
                                ? `<p class="allergies">Allergies: ${escapeHtml(
                                    meal.allergies
                                  )}</p>`
                                : ""
                            }
                        </li>
                    `
                      )
                      .join("")}
                </ul>
            `
                : "<p>No meals available</p>"
            }
        </div>
    `
    )
    .join("");

  menuContent.innerHTML = menuHTML;
}

/**
 * Helper functions for UI state
 */
function showLoading(show) {
  loadingDiv.classList.toggle("hidden", !show);
}

function showMenuLoading(show) {
  document.getElementById("menuLoading").classList.toggle("hidden", !show);
}

function showError(message) {
  errorDiv.textContent = message;
  errorDiv.classList.remove("hidden");
}

function hideError() {
  errorDiv.classList.add("hidden");
}

function showMenuError(message) {
  const menuError = document.getElementById("menuError");
  menuError.textContent = message;
  menuError.classList.remove("hidden");
}

function hideMenuError() {
  document.getElementById("menuError").classList.add("hidden");
}

/**
 * Escape HTML to prevent XSS attacks
 */
function escapeHtml(text) {
  if (!text) return "";
  const div = document.createElement("div");
  div.textContent = text;
  return div.innerHTML;
}

// Initialize the app when DOM is ready
document.addEventListener("DOMContentLoaded", init);
