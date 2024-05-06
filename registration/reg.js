document.getElementById('registrationForm').addEventListener('submit', function(event) {
  event.preventDefault();
  var username = document.getElementById('username').value.trim();
  var email = document.getElementById('email').value.trim();
  var password = document.getElementById('password').value;
  var confirmPassword = document.getElementById('confirmPassword').value;
  var contact = document.getElementById('contact').value;

  var usernameField = document.getElementById('username');
  var emailField = document.getElementById('email');
  var passwordField = document.getElementById('password');
  var confirmPasswordField = document.getElementById('confirmPassword');

  var usernameError = document.getElementById('usernameError');
  var emailError = document.getElementById('emailError');
  var passwordError = document.getElementById('passwordError');
  var confirmPasswordError = document.getElementById('confirmPasswordError');

  // Resetting previous errors
  usernameError.textContent = '';
  emailError.textContent = '';
  passwordError.textContent = '';
  confirmPasswordError.textContent = '';

  // Validations
  var isValid = true;

  if (username === '') {
    usernameError.textContent = 'Username cannot be empty';
    usernameField.style.border = '1px solid red';
    isValid = false;
  } else {
    usernameField.style.border = '';
  }

  if (password.length < 6) {
    passwordError.textContent = 'Password should be at least 6 characters long';
    passwordField.style.border = '1px solid red';
    isValid = false;
  } else {
    passwordField.style.border = '';
  }

  if (password !== confirmPassword) {
    confirmPasswordError.textContent = 'Passwords do not match';
    confirmPasswordField.style.border = '1px solid red';
    isValid = false;
  } else {
    confirmPasswordField.style.border = '';
  }

  if (email.indexOf('@') === -1) {
    emailError.textContent = 'Invalid email address';
    emailField.style.border = '1px solid red';
    isValid = false;
  } else {
    emailField.style.border = '';
  }

  if (!isValid) {
    return; // Don't proceed if there are validation errors
  }

  // Save data to local storage
  var userData = {
    username: username,
    email: email,
    password: password,
    contact: contact
  };
  localStorage.setItem('userData', JSON.stringify(userData));

  // Redirect to login page
  window.location.href = '../login/login.html'; 
});

function togglePasswordVisibility(inputId) {
  var passwordInput = document.getElementById(inputId);
  var eyeIcon = passwordInput.nextElementSibling.querySelector('i');

  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    eyeIcon.classList.add('fa-eye-slash'); // Add the class to strike through the eye icon
  } else {
    passwordInput.type = "password";
    eyeIcon.classList.remove('fa-eye-slash'); // Remove the class to unstrike the eye icon
  }
}
