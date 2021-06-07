//Variables
let signupButton = document.getElementById("signupButton");
let loginButton = document.getElementById("loginButton");
let signupSection = document.getElementById("signupSection");
let loginSection = document.getElementById("loginSection");
const buttons = document.getElementById('index');

//Functions to show the form depending on wich button you click
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
  window.location.reload();

  let name = document.getElementById('signupName').value;
  let lastname = 'Lastname : ' + document.getElementById('signupLastname').value;
  let email = 'Email : ' + document.getElementById('signupEmail').value;
  let pass = 'password : ' + document.getElementById('signupPassword').value;

  //se non c'è niente da memorizzare all'inizio memorizza un array vuoto
  if(localStorage.getItem('emailData')==null){
    localStorage.setItem('emailData','[]');
  }
  if(localStorage.getItem('passData')==null){
    localStorage.setItem('passData','[]');
  }

  //dati vecchi e aggiungi a quelli nuovi
  let old_mail = JSON.parse(localStorage.getItem('emailData'));
  old_mail.push(email);
  let old_pass = JSON.parse(localStorage.getItem('passData'));
  old_pass.push(pass);

  //memorizza i dati vecchi + i nuovi dati
  localStorage.setItem('emailData', JSON.stringify(old_mail));
  localStorage.setItem('passData', JSON.stringify(old_pass));
}


//Listeners
loginButton.addEventListener("click", loginForm);
signupButton.addEventListener("click", signupForm);
