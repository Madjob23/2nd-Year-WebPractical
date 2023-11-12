// Validation for the login form
function validateForm() {
    let x = document.forms["loginForm"]["username"].value;
    let y = document.forms["loginForm"]["password"].value;
    if (x == "") {
      alert("Username must be filled out");
      return false;
    }
    if (y == "") {
      alert("Password must be filled out");
      return false;
    }
}