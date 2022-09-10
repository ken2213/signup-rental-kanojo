var inputs = document.querySelectorAll('input');

var firstName = document.getElementById('first-name');
var lastName = document.getElementById('last-name');
var email = document.getElementById('email');
var phoneNumber = document.getElementById('phone-number');

var password = document.getElementById('password');
var confirmPassword = document.getElementById('confirm-password');

var passwordErrorAlert = document.getElementById('password-error-alert');
var createAccountButton = document.getElementById('create-account-button');



function changeFirstNameBorderColor() {
  if (firstName.value == '') {
    firstName.style.borderColor = 'hsl(0, 100%, 50%)';
    firstName.style.boxShadow = '0 0 8px hsl(0, 100%, 70%)'
  } else {
    firstName.style.borderColor = 'hsl(120, 100%, 45%)';
    firstName.style.boxShadow = '0 0 8px hsl(120, 100%, 65%)'
  } 
}

function changeLastNameBorderColor() {
  if (lastName.value == '') {
    lastName.style.borderColor = 'hsl(0, 100%, 50%)';
    lastName.style.boxShadow = '0 0 8px hsl(0, 100%, 70%)';
  } else {
    lastName.style.borderColor = 'hsl(120, 100%, 45%)';
    lastName.style.boxShadow = '0 0 8px hsl(120, 100%, 65%)';
  } 
}

function changeEmailBorderColor() {
  if (email.value == '') {
    email.style.borderColor = 'hsl(0, 100%, 50%';
    email.style.boxShadow = '0 0 8px hsl(0, 100%, 70%)';
  } else {
    email.style.borderColor = 'hsl(120, 100%, 45%)';
    email.style.boxShadow = '0 0 8px hsl(120, 100%, 65%)';
  } 
}

function changePhoneNumberBorderColor() {
  if (phoneNumber.value == '') {
    phoneNumber.style.borderColor = 'hsl(0, 100%, 50%';
    phoneNumber.style.boxShadow = '0 0 8px hsl(0, 100%, 70%)';
  } else {
    phoneNumber.style.borderColor = 'hsl(120, 100%, 45%)';
    phoneNumber.style.boxShadow = '0 0 8px hsl(120, 100%, 65%)';
  } 
}


function validatePassword() {
  if (password.value != confirmPassword.value) {
    errorMessage();
    password.style.borderColor = 'hsl(0, 100%, 50%';
    password.style.boxShadow = '0 0 8px hsl(0, 100%, 70%)';
    confirmPassword.style.borderColor = 'hsl(0, 100%, 50%';
    confirmPassword.style.boxShadow = '0 0 8px hsl(0, 100%, 70%)';
  } else {
    correctMessage();
    password.style.borderColor = 'hsl(120, 100%, 45%)';
    password.style.boxShadow = '0 0 8px hsl(120, 100%, 65%)';
    confirmPassword.style.borderColor = 'hsl(120, 100%, 45%)';
    confirmPassword.style.boxShadow = '0 0 8px hsl(120, 100%, 65%)'
  }
}

function errorMessage() {
  passwordErrorAlert.innerHTML = '☒ Use same password';
  passwordErrorAlert.style.color = 'white';
  passwordErrorAlert.style.backgroundColor = 'red';
  passwordErrorAlert.style.padding = '5px';
  passwordErrorAlert.style.borderRadius = '3px';
}

function correctMessage() {
  passwordErrorAlert.innerHTML = '🗹 Password Matched';
  passwordErrorAlert.style.color = 'white';
  passwordErrorAlert.style.backgroundColor = 'green';
  passwordErrorAlert.style.padding = '5px';
  passwordErrorAlert.style.borderRadius = '3px';
}



function activateAndDisableButton() {
  if (((password.value != '' && confirmPassword.value != '') &&
       (password.value === confirmPassword.value)) && 
        firstName.value != "" && 
        lastName.value != "" && 
        email.value != "" && 
        phoneNumber.value != "") {
            lightenButton();
            hoverButton();
            leaveButton();
            clickButton();
          } else {
            darkenButton();
        }
}

function darkenButton() {
  createAccountButton.disabled = true;
  createAccountButton.style.cursor = 'auto';
  createAccountButton.style.color = 'gray';
  createAccountButton.style.backgroundColor = 'hsl(193, 100%, 10%)';
  createAccountButton.style.boxShadow = '0 0 black'
}

function lightenButton() {
  createAccountButton.disabled = false;
  createAccountButton.style.color = 'white';
  createAccountButton.style.backgroundColor = 'hsl(193, 100%, 32%)';
  createAccountButton.style.boxShadow = '0 0 10px hsl(193, 100%, 32%)'
}


var hoverButton = createAccountButton.addEventListener('mouseover', () => {
  createAccountButton.style.cursor = 'pointer';
  createAccountButton.style.transform = 'scale(1.05)';
  createAccountButton.style.backgroundColor = 'hsl(193, 100%, 52%)';
  createAccountButton.style.color = 'black';
}) 

var leaveButton = createAccountButton.addEventListener('mouseleave', () => {
  createAccountButton.style.transform = 'scale(1)';
  createAccountButton.style.backgroundColor = 'hsl(193, 100%, 32%)';
  createAccountButton.style.color = 'white';
})

var clickButton = createAccountButton.addEventListener('click', () => {
  createAccountButton.style.transform = 'scale(0.9)';
})









