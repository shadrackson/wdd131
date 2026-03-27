

 
// Gets the current year
const year = new Date().getFullYear();
document.querySelector("#currentyear").textContent = year;

// Updates last modified date
const lastModified = document.querySelector("#lastModified");
lastModified.textContent = document.lastModified;

// Wind chill function
function calculateWindChill(temp, windSpeed) {
  return Math.round(13.12 + 0.6215 * temp - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temp * Math.pow(windSpeed, 0.16));
}

// Get values from page
const temperature = parseFloat(document.getElementById("temp").textContent);
const windSpeed = parseFloat(document.getElementById("wind-speed").textContent);

// Only calculate if conditions are met
if (temperature <= 10 && windSpeed > 4.8) {
  document.getElementById("wind-chill").textContent = calculateWindChill(temperature, windSpeed) + " °C";
} else {
  document.getElementById("wind-chill").textContent = "N/A";
}


