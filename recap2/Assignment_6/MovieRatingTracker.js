function trackMovies() {
  let movies = [];
  let numMovies;
  while (true) {
    numMovies = prompt("How many movies do you want to rate?");

    if (numMovies && !isNaN(numMovies) && numMovies >= 0) {
      numMovies = parseInt(numMovies);
      break;
    } else {
      alert("Please enter a valid number: ");
    }
  }

  // Loop to gather movie details from the user
  for (let i = 0; i < numMovies; i++) {
    let title = prompt("Enter the title of the movie:");
    let rating = parseInt(
      prompt("Enter the rating for " + title + " (1 to 5):")
    );

    // Ensure the rating is between 1 and 5
    while (rating < 1 || rating > 5 || isNaN(rating)) {
      rating = parseInt(
        prompt("Invalid rating. Please enter a number between 1 and 5:")
      );
    }

    // Store the movie details as an object
    movies.push({ title: title, rating: rating });
  }

  // Sort the movies array based on the rating in descending order
  movies.sort((a, b) => b.rating - a.rating);

  // Find the highest-rated movie (first element after sorting)
  const highestRatedMovie = movies[0];

  // Display the sorted movies and the highest-rated movie
  displayMovies(movies, highestRatedMovie);
}

function displayMovies(movies, highestRatedMovie) {
  // Get the element to display the sorted movies
  const sortedMoviesList = document.getElementById("sorted-movies-list");
  sortedMoviesList.innerHTML = "";

  // Display each movie in the sorted list
  movies.forEach((movie) => {
    let li = document.createElement("li");
    li.textContent = `${movie.title} - Rating: ${movie.rating}`;
    sortedMoviesList.appendChild(li);
  });

  // Display the highest-rated movie
  const highestRatedElement = document.getElementById("highest-rated-movie");
  highestRatedElement.textContent = `${highestRatedMovie.title} - Rating: ${highestRatedMovie.rating}`;
}

// Call the trackMovies function to start the program
trackMovies();
