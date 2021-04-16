const pass = document.getElementById("password");
const confirmPass = document.getElementById("confirmPassword");
const form = document.getElementById("form");

// When form is submitted, compare the two passwords and act.
// Form can not be submitted unless the other criteria have been met.
form.addEventListener("submit", (e) => {
  e.preventDefault(); // Actually don't submit.

  if (pass.value === confirmPass.value) {
    form.reset();
    console.log("Submitted successfully");
  } else {
    alert("Mismatched passwords");
  }
});
