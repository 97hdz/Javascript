//Variables
let signupButton = document.getElementById("signupButton");
let loginButton = document.getElementById("loginButton");
let signupSection = document.getElementById("signupSection");
let loginSection = document.getElementById("loginSection");
let dashboard = document.getElementById('dashboard');
let lists = document.getElementById('lists');
const buttons = document.getElementById('index');
let accountSettings1 = document.getElementById('accountSettings1');
let accountSettings2 = document.getElementById('accountSettings2');
//Functions to show the form depending on wich button you click
let signupForm = () => {
  signupSection.classList.remove("hidden")
  buttons.classList.add("hidden");
}
let loginForm = () => {
  loginSection.classList.remove("hidden")
  buttons.classList.add("hidden");
}
//Separator UI
let separator = (e) => {
  let separator = document.createElement('hr');
  separator.classList.add('hr3');
  e.appendChild(separator);
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
let control = () => {
  // The input
  const email = document.getElementById('loginEmail').value;
  const pass = document.getElementById('loginPassword').value;
  //JSON.parse is used to make the data redable and can be visualized as an Array,
  //so there's no need to use the split method to transform String -> Array
  let allEmails = JSON.parse(localStorage.getItem('emailData'));
  let allPasswords = JSON.parse(localStorage.getItem('passData'));
  // console.log(email);
  // console.log(allEmails);
  //the FOR to verify the input with the localStorage data
  for (var i = 0; i < allEmails.length; i++) {
    if (email == allEmails[i] && pass == allPasswords[i]) {
      // console.log('la mail : '+ email +' e la password : '+ pass +' sono gli stessi');
      var success=true;
      seeDashboard();
      userData();
      log_out(email);
    }
  }
  if (!success) {
    console.log('errore');
  }
}

let log_out = (e) =>{
  let userDash = document.getElementById('userDashboard');
  let userList = document.getElementById('userShowList');
  let textInside = document.createTextNode(e);
  let textInside2 = document.createTextNode(e);
  userDash.appendChild(textInside);
  userList.appendChild(textInside2);
  // console.log(' User : '+e);
  separator(userList);
  separator(userDash);
}

//creation of the unique key of every user
let userData = () => {
  let email = document.getElementById('loginEmail').value;
  let pass = document.getElementById('loginPassword').value;
  var key = email+pass;
  return key;
}

// ------------------ THE DASHBOARD -------------
var seeDashboard = (e) =>{
  dashboard.classList.remove('hidden');
  buttons.classList.add("hidden");
  loginSection.classList.add('hidden');
  let h2 = document.getElementsByTagName('h2')[0];
  separator(h2);
  //redeclaring listUserName to be able to use it in this function
  dashboard_list_creation();
}

let dashboard_list_creation = () =>{
  let listUserName = JSON.parse(localStorage.getItem(userData()));
  var listDiv = document.getElementById('list_div');
  if (listUserName) {
    let numero = listUserName.length;
    for (var i = 0; i < numero; i++) {
      var listTitle = document.createElement('h3');
      listDiv.appendChild(listTitle);
      var titleInside = document.createTextNode(listUserName[i]);
      listTitle.setAttribute('onclick','show_click_list('+i+');'); // function to get the number that will be equal to lits array postion
      listTitle.setAttribute('id',i)
      listTitle.appendChild(titleInside);
      // console.log(titleInside.nodeValue);
      //Separator
      separator(listTitle);
      //creating Listeners
    }
  }
}

let show_click_list = (e) => {
  let listUserName = JSON.parse(localStorage.getItem(userData()));
  let numero = listUserName.length;
  let ol = document.getElementById('ol');

  for (var i = 0; i < numero ; i++) { // verify what number was passed by the other Function
    if (e==i) {
      let listnameInput = document.getElementById('listname').value;
      let showList = document.getElementById('showList');
      let current_id = document.getElementById('showCurrentList');
      let buttonEdit = document.getElementById('buttonEditList');
      dashboard.classList.add('hidden');
      showList.classList.remove('hidden');
      let currentList = document.createTextNode(listUserName[e]);
      current_id.appendChild(currentList);
      separator(current_id);
      let nope = listUserName[e];
      let currentListItems = localStorage.getItem(userData()+" : "+nope);
      //passing the index value to update the name of the list
      buttonEdit.setAttribute('onclick','edit_list('+i+')')
      const split = currentListItems.split(','); // separando los items para poder mostrarlos en forma individual con la lista
      for (var t = 0; t < split.length; t++) {
        // console.log(split[t]);
        let itemLista = document.createTextNode(split[t]);
        let li = document.createElement('li');
        li.setAttribute('onclick','add_done('+t+')');
        li.appendChild(itemLista);
        ol.appendChild(li);
      }
    }
  }
}

let edit_list = (h) => {
  let lists = document.getElementById('showList');
  lists.classList.add('hidden');
  let listedit = document.getElementById('list_edit');
  listedit.classList.remove('hidden');

  let listUserName = JSON.parse(localStorage.getItem(userData()));
  // console.log(listUserName[h]);
  let editCurrentList = document.getElementById('editCurrentList');
  let insideText = document.createTextNode(listUserName[h]);
  editCurrentList.appendChild(insideText);

  let button = document.createElement('button');
  listedit.appendChild(button)
  let button_text = document.createTextNode('SAVE');
  button.appendChild(button_text);
  button.setAttribute('onclick','save_edit_list('+h+')')
  // console.log(h);
}

let save_edit_list = (p) => {
  const email = document.getElementById('loginEmail').value;
  const pass = document.getElementById('loginPassword').value;
  const key = email+pass;
  let listName = JSON.parse(localStorage.getItem(userData()));
  console.log(listName[p]);
  let t = listName[p];
  console.log(t);
  let newListName = document.getElementById('newListName').value;
  let existListName = localStorage.getItem(userData()+" : "+listName[p]);
  //console.log(existListName);
  //console.log(newListName);
  // console.log(list);
  // console.log(existListName);
  localStorage.setItem(userData()+" : "+newListName, existListName);
  let all_list = JSON.parse(localStorage.getItem(key));
  console.log(all_list[p]);
  //index of value to sub on the main localStorage key : user -> lists
  all_list[p]=newListName;
  localStorage.setItem(key, JSON.stringify(all_list));
  //localStorage.removeItem(userData()+" : "+listName[p]);
  // console.log(existListName);

}

let add_done = (number) =>{
  let list_items = document.getElementsByTagName('li');
  let currentITEM = list_items[number];
  console.log(currentITEM.textContent);
  console.log(currentITEM.classList);

  if (currentITEM.classList == "") {
    currentITEM.classList.add('done');
  } else {
    currentITEM.classList.remove('done');
  }
}

let check_done = () => {
  let itemDone = getElementsByClassName('done');
  let textDone = document.createTextNode(' - DONE');
  itemDone.appendChild(textDone);
}

let accountSettings = () =>{
  //getting these two values to change it later
  let email = document.getElementById('loginEmail').value;
  let pass = document.getElementById('loginPassword').value;
  users.classList.remove('hidden');
  dashboard.classList.add('hidden');
  showList.classList.add('hidden');
  //displaying the values on the html
  let currentUser = document.getElementById('currentUser');
  let currentPass = document.getElementById('currentPass');
  let userInsideText = document.createTextNode(email);
  let passInsideText = document.createTextNode(pass);
  currentUser.appendChild(userInsideText);
  separator(currentUser);
  currentPass.appendChild(passInsideText);
  //geting the inputs for the update
  // let updateUser = document.getElementById('updateUser').value;
  // let updatePass = document.getElementById('updatePass').value;
}

let update_data = () =>{
  let email = document.getElementById('loginEmail').value;
  let pass = document.getElementById('loginPassword').value;
  let updateUser = document.getElementById('updateUser').value;
  let updatePass = document.getElementById('updatePass').value;
  let key = updateUser+updatePass;

  //getting the localStorage values
  let allUsersMail = JSON.parse(localStorage.getItem('emailData'));
  let allUsersPass = JSON.parse(localStorage.getItem('passData'));
  //getting the right index value
  let n = allUsersMail.indexOf(email);
  allUsersMail[n]=updateUser;
  allUsersPass[n]=updatePass;
  //Changing data in localStorage
  localStorage.setItem('passData', JSON.stringify(allUsersPass));
  localStorage.setItem('emailData', JSON.stringify(allUsersMail));
  //add user : list -> items
  let user_list = JSON.parse(localStorage.getItem(userData()));
  localStorage.setItem(key, JSON.stringify(user_list));
  // for to get all the items namelist + items values and creating new ones with the update user,
  for (var i = 0; i < user_list.length; i++) {
    let t = user_list[i];
    let currentList = localStorage.getItem(userData()+" : "+t);
    localStorage.setItem(key+" : "+t, currentList);
    localStorage.removeItem(userData()+" : "+t);
    // console.log(t);
    // console.log(currentList);
  }
  localStorage.removeItem(userData()); // and finally elimite the old user data ( name : all lists )
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
const listAndItems = () => {

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
