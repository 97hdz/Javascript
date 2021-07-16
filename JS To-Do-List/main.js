//Variables
let signupButton = document.getElementById("signupButton");
let loginButton = document.getElementById("loginButton");
let signupSection = document.getElementById("signupSection");
let loginSection = document.getElementById("loginSection");
let dashboard = document.getElementById('dashboard');
let lists = document.getElementById('lists');
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
  const email = document.getElementById('loginEmail').value;
  const pass = document.getElementById('loginPassword').value;
  //JSON.parse is used to make the data redable and can be visualized as an Array,
  //so there's no need to use the split method to transform String -> Array
  let allEmails = JSON.parse(localStorage.getItem('emailData'));
  let allPasswords = JSON.parse(localStorage.getItem('passData'));

  console.log(email);
  console.log(allEmails);

  //the FOR to verify the input with the localStorage data
  for (var i = 0; i < allEmails.length; i++) {
    if (email == allEmails[i] && pass == allPasswords[i]) {
      console.log('la mail : '+ email +' e la password : '+ pass +' sono gli stessi');
      var success=true;
      seeDashboard();
      userData();
    }
  }
  if (!success) {
    console.log('errore');
  }
}

//creation of the unique key of every user
let userData = (e) => {
  let email = document.getElementById('loginEmail').value;
  let pass = document.getElementById('loginPassword').value;
  var key = email+pass;
  return key;
}

// ------------------ THE DASHBOARD -------------
let seeDashboard = (event) =>{
  // all the sections to hide
  dashboard.classList.remove('hidden');
  buttons.classList.add("hidden");
  loginSection.classList.add('hidden');
}

let newList = (e) => {
  dashboard.classList.add('hidden');
  lists.classList.remove('hidden');
  console.log('new list');
}

//creation of list to the localStorage
let listAndItems = (e) => {

    let parentList = document.getElementById('addList');
    let listnameInput = document.getElementById('listname').value;
    let itemInput = parentList.getElementsByClassName('inputItem')[0].value;

    //declaration of the input list
    if(localStorage.getItem(userData())==null){
      localStorage.setItem(userData(), '[]');
    }

  

    let user_list = JSON.parse(localStorage.getItem(userData()));
    user_list.push(listnameInput);

    //memorizza i dati vecchi + i nuovi dati
    localStorage.setItem(userData(), JSON.stringify(user_list));
    localStorage.setItem(userData()+" : "+listnameInput, itemInput);

}

let moreItems = (event) => {
  const newItem = document.createElement('input');
  const form = document.getElementById('addList');
  form.appendChild(newItem);

}
