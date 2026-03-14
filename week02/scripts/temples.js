


// Get the element where the date will appear
const lastModified = document.querySelector("#lastModified");

// Insert the last modified date of the document
lastModified.textContent = document.lastModified;

/* Selects the hamburger menu button */

const button = document.querySelector("#menu-button");

/* Select the navigation menu */

const navigation = document.querySelector(".navigation");


/* click event to toggle the menu */

button.addEventListener("click", () => {

    /* Toggle the class that shows or hides the menu */

    navigation.classList.toggle("open");


    /* Change the icon from ☰ to X when menu is open */

    button.textContent =
        button.textContent === "☰" ? "X" : "☰";

});