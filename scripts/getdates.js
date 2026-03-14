

// Sets current year dynamically
document.getElementById("currentyear").textContent = new Date().getFullYear();

// Sets last modified date automatically
document.getElementById("lastModified").textContent = document.lastModified;

const button = document.querySelector("#menu-button");
        const menu = document.querySelector("nav ul");

        button.addEventListener("click", () => {
            menu.classList.toggle("open");

        });
