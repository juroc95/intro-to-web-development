// Add your code here
const username_input = document.getElementById("username");
const email_input = document.getElementById("email");
const password_input = document.getElementById("password");
const radio_yes = document.getElementById("yes");
const radio_no = document.getElementById("no");
const date_input = document.getElementById("date");

document.addEventListener("submit", function (e) {
  e.preventDefault();
  if (
    username_input.value === "" ||
    email_input.value === "" ||
    password_input.value === ""
  ) {
    console.warn("You must enter some data to submit this form");
    return;
  }
  console.log("========= Form Submission =========");
  console.log("Username: " + username_input.value);
  console.log("Email: " + email_input.value);
  if (radio_yes.checked) {
    console.log("Newsletter: " + radio_yes.value);
  } else if (radio_no.checked) {
    console.log("Newsletter: " + radio_no.value);
  } else {
    console.log("Newsletter: no submission");
  }
  if (date_input.value) {
    console.log("Date: " + date_input.value);
  } else {
    console.log("Date: no submission");
  }
});
