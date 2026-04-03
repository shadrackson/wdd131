


// Displays the current year dynamically in the footer
document.getElementById("currentyear").textContent = new Date().getFullYear();

// Displays the last modified date of the document
document.getElementById("lastModified").textContent = document.lastModified;

// Toggle navigation menu for mobile view
function toggleMenu() {
    const navMenu = document.getElementById("nav-menu");
    navMenu.classList.toggle("open"); // Adds/removes 'open' class
}
