// JavaScript for the extension

class MovieRecommendation {
  constructor(data) {
    this.id = data.movie.id;
    this.externalId = data.movie.externalId;
    this.title = data.movie.title;
    this.originalTitle = data.movie.originalTitle;
    this.genreIds = data.movie.genreIds;
    this.overview = data.movie.overview;
    this.voteAverage = data.movie.voteAverage;
    this.releaseDate = data.movie.releaseYear;
    this.criteria = data.criteria;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  fetch("http://localhost:8080/movie-recommendation/recommendation")
    .then((response) => response.json())
    .then((data) => {
      const recommendation = new MovieRecommendation(data);

      // Get the first card element
      const card = document.querySelector(".card:first-of-type");

      // Set the title and overview of the movie recommendation
      card.querySelector("h1").textContent = recommendation.title;
      card.querySelector("p").textContent = recommendation.overview;
      card.querySelector(".rating").innerHTML = recommendation.voteAverage;
    });
  // Center the cards horizontally and vertically
  const cardContainer = document.querySelector(".card-container");
  cardContainer.style.display = "flex";
  cardContainer.style.alignItems = "center";
  cardContainer.style.justifyContent = "center";

  // Set the height of the extension to the full height of the window
  cardContainer.style.height = `${window.innerHeight}px`;
});

function searchMovie(e) {
  console.log("key", e.keyCode);
  if (e.keyCode === 13) {
    e.preventDefault(); // Ensure it is only this code that runs

    alert("Enter was pressed was presses");
  }
}

const searchInput = document.getElementById("search-input");
const searchResults = document.getElementById("search-results");

searchInput.addEventListener("keydown", async (event) => {
  if (event.code === "Enter") {
    // 13 is the keyCode for the Enter key
    event.preventDefault();
    const searchTerm = searchInput.value;
    const response = await fetch(
      `http://localhost:8080/movie-recommendation/search?title=${searchTerm}`
    );
    const data = await response.json();

    data.forEach((movie) => {
      const movieElement = document.createElement("div");
      movieElement.classList.add("movie");
      movieElement.innerHTML = `<p>${movie.title} (${movie.releaseYear})</p>`;
      movieElement.addEventListener("click", async () => {
        const movieId = movie.externalId;
        const response = await fetch(
          "http://localhost:8080/movie-recommendation/watched",
          {
            method: "POST",
            body: JSON.stringify({ externalId: movieId }),
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const data = await response.json();
        console.log(data);
      });
      searchResults.appendChild(movieElement);
    });
  }
});
