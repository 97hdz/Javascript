// --------- Starting the variables
const logIn = document.getElementById('log-in');
const signUp = document.getElementById('sign-up');
let hiddenLog = document.getElementById('loghidden');
let hiddenSign = document.getElementById('signhidden');


// ---------- Every click
let hideLog = (event) => {
  hiddenLog.classList.remove("hidden")
  if (hiddenSign.classList != 'hidden'){
    hiddenSign.classList.add("hidden")
  }
}

let hideSign = (event) => {
  hiddenSign.classList.remove("hidden")
  if (hiddenLog.classList != 'hidden'){
    hiddenLog.classList.add("hidden")
  }
}

// ---------- Listeners
logIn.addEventListener('click', hideLog)
signUp.addEventListener('click', hideSign)
