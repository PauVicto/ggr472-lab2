// Retrieve button, image, and text display elements
const yesButton = document.getElementById("btn-pet");
const petsCountDisplay = document.getElementById("count-pets");
const catImage = document.getElementById("cat-image");

// Initialize count variable and which cat image shows
let countPets = 0;
let showingPetting = false;

// Image file paths
const catStill = "data/cat.png";
const catPetting = "data/petting-cat.png";

// Use event listener to track button clicks from example JS LAB 1
yesButton.addEventListener("click", () => {
  countPets++;
  petsCountDisplay.innerHTML = countPets;

  // Switching image from each click
  showingPetting = !showingPetting;

  if (showingPetting) {
    catImage.src = catPetting;
    catImage.alt = "Hand petting a cat";
  } else {
    catImage.src = catStill;
    catImage.alt = "Cat";
  }
});
