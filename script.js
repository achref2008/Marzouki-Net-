// script.js

// Function to show an alert when an image is clicked
document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll(".image-gallery img");
    
    images.forEach((image) => {
        image.addEventListener("click", () => {
            alert("You clicked on an image!");
        });
    });
});

