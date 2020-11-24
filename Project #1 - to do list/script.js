// --------- Starting the variables
const logIn = document.getElementById('log-in');
const signUp = document.getElementById('sign-up');
let hiddenLog = document.getElementById('loghidden');
let hiddenSign = document.getElementById('signhidden');
const submit = document.getElementById('submitLog');
const dashboard = document.getElementById('dashboard');
const storage = document.getElementById('submitSignUp');
const email = document.getElementById('input-email');

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

const showDashboard = (event) => {
  let index = document.getElementById('index')
  index.classList.add('hidden')
  dashboard.classList.remove('hidden')

}

const storageData = (event) => {
  localStorage.setItem('textinput', email.textContent)
}

// ---------- Listeners
logIn.addEventListener('click', hideLog)
signUp.addEventListener('click', hideSign)
submit.addEventListener('click', showDashboard)
storage.addEventListener('click', storageData)
