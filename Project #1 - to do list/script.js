// --------- Starting the variables
const logIn = document.getElementById('log-in');
const signUp = document.getElementById('sign-up');
let hiddenLog = document.getElementById('loghidden');
let hiddenSign = document.getElementById('signhidden');

// ---------- Every click
const logInClick = (event) => {
  hiddenLog.removeAttribute("hidden", {once:true});
}

const SignUpClick = (event) => {
  hiddenSign.removeAttribute("hidden", {once:true});
}

// ---------- Listeners
logIn.addEventListener('click', logInClick)
signUp.addEventListener('click', SignUpClick)
