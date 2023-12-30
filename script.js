const login = document.getElementById("login");
const signup = document.getElementById("signup");

function toggle(e, password){
  const eye = e.querySelector(".fa-eye");
  const eyeSlash = e.querySelector(".fa-eye-slash");

  if (password.getAttribute("type") === "password") {
    password.setAttribute("type", "text");
    eye.style.display = "none";
    eyeSlash.style.display = "inline";
  } else {
    password.setAttribute("type", "password");
    eye.style.display = "inline";
    eyeSlash.style.display = "none";
  }
}

document.querySelector("#toggleLoginPassword").addEventListener("click", function () {
  const password = document.querySelector("#loginPassword");
  toggle(this, password);
});

document.querySelector("#toggleSignupPassword").addEventListener("click", function () {
  const password = document.querySelector("#signupPassword");
  toggle(this, password);
});

document.getElementById("switchToSignup").addEventListener("click", function (e) {
    e.preventDefault();
    document.title = "Signup";
    login.classList.remove("active");
    signup.classList.add("active");
  });

document.getElementById("switchToLogin").addEventListener("click", function (e) {
    e.preventDefault();
    document.title = "Login";
    signup.classList.remove("active");
    login.classList.add("active");
  });

login.addEventListener("submit", function (e) {
  e.preventDefault();
  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;

  console.log("Login - Email:", email, "Password:", password);
});

signup.addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("signupName").value;
  const email = document.getElementById("signupEmail").value;
  const password = document.getElementById("signupPassword").value;

  console.log("Sign Up - Name:", name, "Email:", email, "Password:", password);
});

document.querySelector("#forgotPassword").addEventListener("click", function (event) {
    event.preventDefault();
    console.log("Forgot Password link clicked");
  });
