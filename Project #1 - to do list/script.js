// --------- Starting the variables
const logIn = document.getElementById('log-in');
const signUp = document.getElementById('sign-up');
let hiddenLog = document.getElementById('loghidden');
let hiddenSign = document.getElementById('signhidden');

// ---------- Every click
const hideLog = (event) => {
  hiddenLog.removeAttribute("hidden")
  if (hiddenSign.attributes[0] == 'hidden'){
  } else {
    hiddenSign.setAttribute("hidden")
  }
}

const hideSign = (event) => {
  hiddenSign.removeAttribute("hidden")
  if (hiddenLog.attributes[0] == 'hidden'){
  } else {
    hiddenLog.setAttribute("hidden")
  }
}

// ---------- Listeners
logIn.addEventListener('click', hideLog)
signUp.addEventListener('click', hideSign)
