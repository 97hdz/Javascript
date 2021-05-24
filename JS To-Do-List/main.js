//Variables
let signupButton = document.getElementById("signupButton");
let loginButton = document.getElementById("loginButton");
let signupSection = document.getElementById("signupSection");
let loginSection = document.getElementById("loginSection");
const buttons = document.getElementById('index');

//Functions to show the form
let signupForm = (event) => {
  signupSection.classList.remove("hidden")
  buttons.classList.add("hidden");
}

let loginForm = (event) => {
  loginSection.classList.remove("hidden")
  buttons.classList.add("hidden");
}


//buttons to save all the data
let saveInput = (event) => {
  let name = document.getElementById('signupName').value;
  let lastname = 'Lastname : ' + document.getElementById('signupLastname').value;
  let email = 'Email : ' + document.getElementById('signupEmail').value;
  let pass = 'password : ' + document.getElementById('signupPassword').value;
  let old_nome = JSON.parse(localStorage.getItem(name));
  localStorage.setItem(' Name : ', JSON.stringify(name));
  console.log(name)
}

let goBack = (event) => {
  window.location.reload();
}


//Listeners
loginButton.addEventListener("click", loginForm);
signupButton.addEventListener("click", signupForm);
