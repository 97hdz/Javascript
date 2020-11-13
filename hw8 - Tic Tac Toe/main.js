
// DUA --- <img src='https://i.ibb.co/6Bzp71H/dua.png' width='245' height='200'>
// Taking all the divs elements inside of board
const com = document.getElementsByClassName("Board")[0];
let idVal = com.getElementsByClassName("shape");

let vacia = idVal[0].textContent;

com.addEventListener("click", LogEvent);

// The function
function LogEvent(event){

    console.log(event.target.id)

    document.getElementById(event.target.id).innerHTML = " FUCK ";

    console.log(idVal[7].textContent)

}
