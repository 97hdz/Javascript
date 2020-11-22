// --------- Starting the variables
const logIn = document.getElementById('log-in');
const signUp = document.getElementById('sign-up');
let hiddenLog = document.getElementById('loghidden');
let hiddenSign = document.getElementById('signhidden');
let currentButton
let currentVisible

// ---------- Every click
let hideLog = (event) => {
  currentVisible = hiddenLog;
  currentHidden = hiddenSign;
}

let hideSign = (event) => {
  currentVisible = hiddenSign;
  currentHidden = hiddenLog;
}

// ----------- Function

currentVisible.removeAttribute("hidden")
currentHidden.setAttribute("hidden")

// ---------- Listeners
logIn.addEventListener('click', hideLog)
signUp.addEventListener('click', hideSign)
