


// Update last modified date
const lastModified = document.querySelector("#lastModified");
lastModified.textContent = document.lastModified;

// Hamburger menu button
const menuButton = document.querySelector("#menu-button");

// Navigation menu
const navigation = document.querySelector(".navigation");

// Click event to toggle menu
menuButton.addEventListener("click", () => {

    // Toggle the class that shows/hides the menu
    navigation.classList.toggle("open");

    // Change the icon from ☰ to X
    menuButton.textContent =
        menuButton.textContent === "☰" ? "X" : "☰";

});