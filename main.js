const emailInput = document.querySelector("#user-email");
const submitBtn = document.querySelector("#submit-btn");
const errorMessage = document.querySelector("#error-message");

submitBtn.addEventListener("click", (event) => {
  event.preventDefault();
  validateEmail();
});

// Add input event listener to clear error on user input
emailInput.addEventListener("input", clearError);

function validateEmail() {
  const userEmail = emailInput.value.trim(); // Trim whitespace from the input

  // Regular expression for basic email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (userEmail === "") {
    displayError("Whoops! It looks like you forgot to add your email");
  } else if (!emailRegex.test(userEmail)) {
    displayError("Please provide a valid email address");
  } else {
    clearError();
  }
  // Change the placeholder text
  emailInput.value = "";
}

function displayError(message) {
  emailInput.classList.add("error");
  errorMessage.textContent = message;
  emailInput.style.border = "1px solid var(--light-red)";
  emailInput.placeholder = "example@example.com";
}

function clearError() {
  emailInput.classList.remove("error");
  errorMessage.textContent = "";
  emailInput.style.border = "1px solid var(--pale-blue)";
  emailInput.placeholder = "Your email address...";
}
