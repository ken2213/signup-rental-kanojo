var input = document.querySelector('input');

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
    errorMessage();
  } else {
    correctMessage();
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


function darkenButton() {
  createAccountButton.disabled = true;
  createAccountButton.style.cursor = 'auto';
  createAccountButton.style.backgroundColor = 'hsl(193, 100%, 10%)';
}

function lightenButton() {
  createAccountButton.disabled = false;
  createAccountButton.style.backgroundColor = 'hsl(193, 100%, 32%)';
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









