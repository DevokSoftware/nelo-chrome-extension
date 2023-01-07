// JavaScript for the extension

class MovieRecommendation {
  constructor(data) {
    this.id = data.id;
    this.externalId = data.externalId;
    this.title = data.title;
    this.originalTitle = data.originalTitle;
    this.genreIds = data.genreIds;
    this.overview = data.overview;
    this.voteAverage = data.voteAverage;
    this.releaseDate = data.releaseDate;
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
    });
  // Center the cards horizontally and vertically
  const cardContainer = document.querySelector(".card-container");
  cardContainer.style.display = "flex";
  cardContainer.style.alignItems = "center";
  cardContainer.style.justifyContent = "center";

  // Set the height of the extension to the full height of the window
  cardContainer.style.height = `${window.innerHeight}px`;
});
