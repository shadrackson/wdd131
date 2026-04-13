



 
// LAST MODIFIED DISPLAY
 
function updateLastModified() {
  const lastUpdated = document.getElementById("last-updated");
  if (lastUpdated) {
    lastUpdated.textContent = document.lastModified;
  }
}
updateLastModified();

// CONTACT FORM LOGIC
 
// Get form elements
const contactForm = document.getElementById("contactForm");

// Array for storing submissions (localStorage)
let submissions = JSON.parse(localStorage.getItem("submissions")) || [];


// Object constructor function 
function createSubmission(name, email, subject, message) {
  return {
    name,
    email,
    subject,
    message,
    time: new Date().toLocaleString()
  };
}


// Event Listener (FORM SUBMIT)
if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    // DOM values
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value.trim();

    // CONDITIONAL LOGIC

    if (!name || !email || !subject || !message) {
      alert("Please fill in all fields before submitting.");
      return;
    }

    // Create object
    const newEntry = createSubmission(name, email, subject, message);

    // Array method
    submissions.push(newEntry);

    // localStorage
    localStorage.setItem("submissions", JSON.stringify(submissions));

    // Template literal confirmation
    alert(`Thank you ${name}, your message has been received.`);

    // Reset form
    contactForm.reset();

    // REDIRECT TO SUBMISSION PAGE
    window.location.href = "submission.html";
  });
}

function getTotalSubmissions() {
  return submissions.length;
}