
// DUA --- <img src='https://i.ibb.co/6Bzp71H/dua.png' width='245' height='200'>
// Taking all the divs elements inside of board
const cells = document.getElementsByClassName('shape')
const currentX = 'X'
const currentO = 'O'
let currentTurn = true

// ----------- EveryClick ---------------
let hasclick = (event) => {

  const currentXO = currentTurn ? currentX : currentO
  //console.log(event.target.id)
  document.getElementById(event.target.id).innerHTML = '<img src="duaBW.png">'
  swapTurns ();
}

// ------------ Listeners ---------------
for (const DivCells of cells){
  DivCells.addEventListener('click', hasclick)
}

// ------------ Functions --------------
let swapTurns = () => currentTurn = !currentTurn
