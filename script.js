// JavaScript for the extension

document.addEventListener("DOMContentLoaded", () => {
  // Center the cards horizontally and vertically
  const cardContainer = document.querySelector(".card-container");
  cardContainer.style.display = "flex";
  cardContainer.style.alignItems = "center";
  cardContainer.style.justifyContent = "center";

  // Set the height of the extension to the full height of the window
  cardContainer.style.height = `${window.innerHeight}px`;
});
