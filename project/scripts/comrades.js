


// ===============================
// COMRADES BANKING SOLUTIONS JS
// ===============================

document.addEventListener("DOMContentLoaded", () => {

  // ===============================
  // 1. LAST UPDATED FOOTER
  // ===============================
  const lastUpdated = document.getElementById("last-updated");
  if (lastUpdated) {
    lastUpdated.textContent = document.lastModified;
  }

  // ===============================
  // 2. CONTACT FORM VALIDATION
  // ===============================
  const form = document.getElementById("contactForm");

  if (form) {

    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const messageInput = document.getElementById("message");

    form.addEventListener("submit", (e) => {

      let isValid = true;

      clearErrors();

      // Name validation
      if (nameInput.value.trim() === "") {
        showError(nameInput, "Full name is required");
        isValid = false;
      }

      // Email validation
      const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,}$/;
      if (!emailInput.value.match(emailPattern)) {
        showError(emailInput, "Enter a valid email address");
        isValid = false;
      }

      // Message validation
      if (messageInput.value.trim().length < 10) {
        showError(messageInput, "Message must be at least 10 characters");
        isValid = false;
      }

      // Stop submission if invalid
      if (!isValid) {
        e.preventDefault();
      }

    });

    // ===============================
    // 3. REAL-TIME INPUT FEEDBACK
    // ===============================
    [nameInput, emailInput, messageInput].forEach(input => {
      input.addEventListener("input", () => {
        removeError(input);
      });
    });

  }

  // ===============================
  // 4. HELPER FUNCTIONS
  // ===============================

  function showError(input, message) {
    const parent = input.parentElement;

    let error = parent.querySelector(".error-message");

    if (!error) {
      error = document.createElement("small");
      error.classList.add("error-message");
      parent.appendChild(error);
    }

    error.textContent = message;
    input.classList.add("input-error");
  }

  function removeError(input) {
    const parent = input.parentElement;
    const error = parent.querySelector(".error-message");

    if (error) {
      error.remove();
    }

    input.classList.remove("input-error");
  }

  function clearErrors() {
    document.querySelectorAll(".error-message").forEach(el => el.remove());
    document.querySelectorAll(".input-error").forEach(el => el.classList.remove("input-error"));
  }

});