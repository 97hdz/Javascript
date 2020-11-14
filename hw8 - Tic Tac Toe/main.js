
// DUA --- <img src='https://i.ibb.co/6Bzp71H/dua.png' width='245' height='200'>
// Taking all the divs elements inside of board
var cells = document.querySelectorAll('.shape')

// ----------- InputInfo ---------------
let hasclick = (event) => {
  console.log(event.target.id)
  document.getElementById(event.target.id).innerHTML = "X";
}

// ------------ Listeners ---------------
for (const DivCells of cells){
  DivCells.addEventListener('click', hasclick)
}
