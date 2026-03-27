


// Get the current year
const year = new Date().getFullYear();

//Insert the year into the footer
document.querySelector("#currentyear").textContent = year;

// Update last modified date
const lastModified = document.querySelector("#lastModified");
lastModified.textContent = document.lastModified;
 
function calculateWindChill(temp, windSpeed) {
    return Math.round(
        13.12 + 0.6215 * temp - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temp * Math.pow(windSpeed, 0.16)
    );
}

const temp = parseFloat(document.getElementById('temp').textContent);
const windSpeed = parseFloat(document.getElementById('wind-speed').textContent);

if (temp <= 10 && windSpeed > 4.8) {
    document.getElementById('wind-chill').textContent = calculateWindChill(temp, windSpeed) + " °C";
} else {
    document.getElementById('wind-chill').textContent = "N/A";
} 





