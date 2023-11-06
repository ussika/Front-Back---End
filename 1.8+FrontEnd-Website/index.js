// Get references to elements
const prevButton = document.getElementById("prevButton");
const nextButton = document.getElementById("nextButton");
const portfolioImage = document.getElementById("portfolioImage");

// Create an array of image sources
const images = ["img/project1.jpg", "img/project2.jpg", "img/project3.jpg"];
let currentIndex = 0;

// Function to change the displayed image
function changeImage(direction) {
    if (direction === "prev") {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
    } else {
        currentIndex = (currentIndex + 1) % images.length;
    }
    portfolioImage.src = images[currentIndex];
}

// Add click event listeners to the previous and next buttons
prevButton.addEventListener("click", () => {
    changeImage("prev");
});

nextButton.addEventListener("click", () => {
    changeImage("next");
});
