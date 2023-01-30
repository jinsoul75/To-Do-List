const loginForm = document.querySelector(".login-form");
const loginInput = loginForm.querySelector("input");
const loginBtn = loginForm.querySelector("button");

const greeting = document.querySelector(".greeting");

const USERNAME_KEY = "username";
const HIDDEN_CLASSNAME = "hidden";

function paintUsername(username) {
  loginForm.classList.add(HIDDEN_CLASSNAME);
  greeting.innerText = `Hello ${username}!`;
}

function onSubmitLogin(event) {
  event.preventDefault();
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintUsername(username);
}

loginForm.addEventListener("submit", onSubmitLogin);

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername !== null) {
  paintUsername(savedUsername);
}
