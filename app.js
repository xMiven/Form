let password = document.querySelector("#password");
let passwordLabel = document.querySelector("#passwordLabel");
let confirmPassword = document.querySelector("#confirmPassword");
let submit = document.querySelector("#submit");

function checkPassword() {
  if (password.value !== confirmPassword.value) {
    password.classList.add("error");
    confirmPassword.classList.add("error");
    submit.disabled = true;
    submit.classList.add("disabled");
    passwordLabel.innerHTML = "Passwords don't match";
    passwordLabel.classList.add("errorFont");
  } else {
    password.classList.remove("error");
    confirmPassword.classList.remove("error");
    submit.disabled = false;
    submit.classList.remove("disabled");
    passwordLabel.innerHTML = "Password:";
    passwordLabel.classList.remove("errorFont");
  }
}

confirmPassword.addEventListener("change", checkPassword);
