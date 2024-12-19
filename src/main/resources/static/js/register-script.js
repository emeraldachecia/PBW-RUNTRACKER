var log = document.getElementById("login");
var reg = document.getElementById("register");
var button = document.getElementById("btn");

function togglePassword(inputId, buttonId){
  const passwordInput = document.getElementById(inputId);
  const toggleButton = document.getElementById(buttonId);

  toggleButton.addEventListener('click', () => {
    if (passwordInput.type === 'password') {
      passwordInput.type = 'text';
      toggleButton.textContent = 'Hide';
    } else {
      passwordInput.type = 'password';
      toggleButton.textContent = 'Show';
    }
  });
}

togglePassword('loginPassword', 'toggleLoginPassword');
togglePassword('registerPassword', 'toggleRegisterPassword');

function register() {
  log.style.left = "-400px";
  reg.style.left = "50px";
  button.style.left = "110px";
}

function login() {
  log.style.left = "50px";
  reg.style.left = "450px";
  button.style.left = "0";
}

function validateForm() {
  let isValid = true;
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();
  const role = document.getElementById('role').value.trim();
  const nameError = document.getElementById('nameError');
  const emailError = document.getElementById('emailError');
  const passwordError = document.getElementById('passwordError');
  const roleError = document.getElementById('roleError');

  // memvalidasi nama
  if (name.length < 4) {
    nameError.style.display = 'block';
      isValid = false;
  } else {
    nameError.style.display = 'none';
  }

  // validasi email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    emailError.style.display = 'block';
      isValid = false;
  } else {
    emailError.style.display = 'none';
  }

    // memvalidasi password
    if (password.length < 4) {
      passwordError.style.display = 'block';
      isValid = false;
    } else {
      passwordError.style.display = 'none';
    }

    // memvalidasi role
    if (role === '') {
      roleError.style.display = 'block';
      isValid = false;
    } else {
      roleError.style.display = 'none';
    }

    return isValid;
  }
