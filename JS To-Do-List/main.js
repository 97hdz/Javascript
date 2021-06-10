//Variables
let signupButton = document.getElementById("signupButton");
let loginButton = document.getElementById("loginButton");
let signupSection = document.getElementById("signupSection");
let loginSection = document.getElementById("loginSection");
let dashboard = document.getElementById('dashboard');
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

//Listeners
loginButton.addEventListener("click", loginForm);
signupButton.addEventListener("click", signupForm);

//buttons to save all the data
let saveInput = (event) => {

  //window.location.reload();
  var name = document.getElementById('signupName').value;
  var lastname = document.getElementById('signupLastname').value;
  var email = document.getElementById('signupEmail').value;
  var pass = document.getElementById('signupPassword').value;

  //se non c'è niente da memorizzare all'inizio memorizza un array vuoto

  if(localStorage.getItem('emailData')==null){
    localStorage.setItem('emailData', '[]');
  }
  if(localStorage.getItem('passData')==null){
    localStorage.setItem('passData', '[]');
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

//Function to control the email/pass input on login with all the data on the localStorage
let control = (event) => {
  // The input
  let email = document.getElementById('loginEmail').value;
  let pass = document.getElementById('loginPassword').value;
  //JSON.parse is used to make the data redable and can be visualized as an Array,
  //so there's no need to use the split method to transform String -> Array
  let allEmails = JSON.parse(localStorage.getItem('emailData'));
  let allPasswords = JSON.parse(localStorage.getItem('passData'));

  console.log(email);
  console.log(allEmails);

  for (var i = 0; i < allEmails.length; i++) {
    if (email == allEmails[i] && pass == allPasswords[i]) {
      console.log('la mail : '+ email +' e la password : '+ pass +' sono gli stessi');
      var success=true;
      seeDashboard();
    }
  }
  if (!success) {
    console.log('errore');
  }
}

// ------------------ THE DASHBOARD -------------
let seeDashboard = (event) =>{
  // all the sections to hide
  dashboard.classList.remove('hidden');
  buttons.classList.add("hidden");
  loginSection.classList.add('hidden');
}

let newList = (e) => {
  console.log('new list');
}
