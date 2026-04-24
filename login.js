const form = document.getElementById("loginForm");
const emailInput = document.getElementById("email");
const guestBtn = document.getElementById("guestBtn");

function setSession(email) {
  // Demo session (not secure)
  localStorage.setItem("ire_user_email", email);
  localStorage.setItem("ire_logged_in", "true");
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  // bootstrap-style validation
  if (!emailInput.checkValidity()) {
    form.classList.add("was-validated");
    return;
  }

  setSession(emailInput.value.trim().toLowerCase());
  window.location.href = "app.html";
});

guestBtn.addEventListener("click", () => {
  setSession("guest@demo.local");
  window.location.href = "app.html";
});
