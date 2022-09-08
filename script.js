var firstName = document.getElementById('first-name');
var lastName = document.getElementById('last-name');
var email = document.getElementById('email');
var phoneNumber = document.getElementById('phone-number');

var password = document.getElementById('password');
var confirmPassword = document.getElementById('confirm-password');
var passwordErrorAlert = document.getElementById('password-error-alert');
var createAccountButton = document.getElementById('create-account-button');

function validatePassword() {
  
  if (password.value != confirmPassword.value) {
    passwordErrorAlert.innerHTML = '☒ Use same password';
    passwordErrorAlert.style.color = 'red';
    createAccountButton.disabled = true;
    createAccountButton.style.backgroundColor = 'hsl(193, 100%, 10%)';
  } else {
    passwordErrorAlert.innerHTML = '🗹 Password Matched';
    passwordErrorAlert.style.color = 'green';
    createAccountButton.disabled = false;
    createAccountButton.style.backgroundColor = 'hsl(193, 100%, 32%)'
  }
}

function wrongPasswordAlert() {
  if (password.value != "" && 
      confirmPassword.value != "" &&
      firstName.value != "" &&
      lastName.value != "" &&
      email.value != "" &&
      phoneNumber.value != "") {
    alert("Your response is submitted");
  } else {
    alert("Please fill all the fields");
  }
}



