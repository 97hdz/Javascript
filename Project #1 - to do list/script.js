// --------- Starting the variables
const logIn = document.getElementById('log-in');
const signUp = document.getElementById('sign-up');
let hiddenLog = document.getElementById('loghidden');
let hiddenSign = document.getElementById('signhidden');
let currentButton

// ---------- Every click
const hideLog = (event) => {
  hiddenSign.classList.remove("hidden")
}

const hideSign = (event) => {
  hiddenSign.classList.remove("hidden")
}

// ---------- Listeners
logIn.addEventListener('click', hideLog)
signUp.addEventListener('click', hideSign)
