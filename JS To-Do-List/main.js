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
const seeDashboard = (event) =>{
  dashboard.classList.remove('hidden');
  buttons.classList.add("hidden");
  loginSection.classList.add('hidden');
  var listDiv = document.getElementById('list_div');
  //redeclaring listUserName to be able to use it in this function
  let listUserName = JSON.parse(localStorage.getItem(userData()));
  if (listUserName) {
    let numero = listUserName.length;
    for (var i = 0; i < numero; i++) {
      var div = document.createElement('div');
      div.classList.add('list_div');
      dashboard.appendChild(div)
      var h3 = document.createElement('h3');
      h3.classList.add('titulo');
      var title = document.createTextNode(listUserName[i]);
      h3.appendChild(title);
      div.appendChild(h3);
    }

  }
}



//Buton to create a new list
let newList = (e) => {
  dashboard.classList.add('hidden');
  lists.classList.remove('hidden');
}
//Button to create more inputs
let moreItems = (e) => {
 const newItem = document.createElement('input');
 newItem.classList.add('inputItem');
 const form = document.getElementById('addList');
 form.appendChild(newItem);
}
//creation of list to the localStorage
const listAndItems = (e) => {
  let parentList = document.getElementById('addList');
  let listnameInput = document.getElementById('listname').value;
  let newitems = []; //the container of all the items from the respective list
  let sizeItems = parentList.getElementsByClassName('inputItem').length; //how many inputs are
  // for to push every item inside of the list
  for (var i = 0; i < sizeItems; i++) {
    var itemInput = parentList.getElementsByClassName('inputItem')[i].value;
    newitems.push(itemInput);
  }
  //declaration of the input list
  if(localStorage.getItem(userData())==null){
    localStorage.setItem(userData(), '[]');
  }
  let user_list = JSON.parse(localStorage.getItem(userData()));
  user_list.push(listnameInput);
  //memorizza i dati vecchi + i nuovi dati
  localStorage.setItem(userData() ,JSON.stringify(user_list));
  localStorage.setItem(userData()+" : "+listnameInput, newitems);
}
