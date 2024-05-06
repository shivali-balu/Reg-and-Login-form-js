document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault();
  var loginEmail = document.getElementById('loginEmail').value;
  var loginPassword = document.getElementById('loginPassword').value; 
  var loginName = document.getElementById("loginName").value ; 

  var userData = JSON.parse(localStorage.getItem('userData'));
  if (userData.username === loginName && userData.email === loginEmail && userData.password === loginPassword) {
    showToast('You have successfully logged in');
  } else {
    showToast('Credentials are invalid');
  }
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

function showToast(message, isValid) {
  var toast = document.getElementById("toast");
  toast.innerHTML = isValid ? '&#10004; ' + message : '&#10060; ' + message;
  toast.className = "show";
  toast.style.backgroundColor = isValid ? "#4CAF50" : "#f44336";
  setTimeout(function(){ toast.className = toast.className.replace("show", "hide"); }, 3000);
}


document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault();
  var loginEmail = document.getElementById('loginEmail').value;
  var loginPassword = document.getElementById('loginPassword').value; 
  var loginName = document.getElementById("loginName").value ; 

  var userData = JSON.parse(localStorage.getItem('userData'));
  if (userData.username === loginName && userData.email === loginEmail && userData.password === loginPassword) {
    showToast('You have successfully logged in', true);
  } else {
    showToast('Credentials are invalid', false);
  }
});

function showToast(message, isValid) {
  var toast = document.getElementById("toast");
  toast.innerHTML = message;
  toast.className = "show";
  if (isValid) {
    toast.style.backgroundColor = "#4CAF50"; // Green background for valid credentials
  } else {
    toast.style.backgroundColor = "#f44336"; // Red background for invalid credentials
  }
  setTimeout(function(){ toast.className = toast.className.replace("show", "hide"); }, 3000);
}
