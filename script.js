const form = document.querySelector('#create-account-form');
const usernameInput = document.querySelector('#username');
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  validateForm();
});

function validateForm() {
  if (usernameInput.value.trim() == '') {
    setError(usernameInput, 'Name can not be empty');
  } else if (
    usernameInput.value.trim().length < 3 ||
    usernameInput.value.trim().length > 15
  ) {
    setError(usernameInput, 'Name must be min 3 and max 15');
  } else {
    setSuccess(usernameInput);
  }
  if (emailInput.value.trim() == '') {
    setError(emailInput, 'Please provide email');
  } else if (isEmailValid(emailInput.value)) {
    setSuccess(emailInput);
  } else {
    setError(emailInput, 'Provide valid email address');
  }
  if (passwordInput.value.trim() == '') {
    setError(passwordInput, 'Please enter password');
  } else if (
    passwordInput.value.trim().length < 7 ||
    passwordInput.value.trim().length > 15
  ) {
    setError(passwordInput, 'password must be at least 7 chareters long');
  } else {
    setSuccess(passwordInput);
  }
}

function setError(element, errorMessage) {
  const parent = element.parentElement;
  if (parent.classList.contains('success')) {
    parent.classList.remove('success');
  }
  parent.classList.add('error');
  const paragraph = parent.querySelector('p');
  paragraph.textContent = errorMessage;
}

function setSuccess(element, errorMessage) {
  const parent = element.parentElement;
  if (parent.classList.contains('error')) {
    parent.classList.remove('error');
  }
  parent.classList.add('success');
}

function isEmailValid(email) {
  const reg =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  return reg.test(email);
}
