
// Selecting all the divs elements inside of board
const cells = document.querySelectorAll('.shape')
const currentX = '<p id="X">X</p>'
const currentO = '<p id="O">O</p>'
let currentTurn = true
let xDontWin
let oDontWin

// ----------- EveryClick ---------------
let hasclick = (event) => {
  const currentXO = currentTurn ? currentX : currentO
  document.getElementById(event.target.id).innerHTML = currentXO
  swapTurns();
  xWins();
  oWins();
  draw();
}

// ------------ Listeners ---------------
for (const DivCells of cells){
  DivCells.addEventListener('click', hasclick, {once:true})
}

// ------------ Functions --------------
let swapTurns = () => currentTurn = !currentTurn
const WinMessageX = () => {alert('X has won!');window.location.reload()}
const WinMessageO = () => {alert('O has won!');window.location.reload()}

// ------------ Game Conditions -----------
const xWins = () => {
  if(currentX==cells[0].innerHTML && currentX==cells[3].innerHTML && currentX==cells[6].innerHTML){
    WinMessageX();
  } else if (currentX==cells[0].innerHTML && currentX==cells[1].innerHTML && currentX==cells[2].innerHTML){
    WinMessageX();
  } else if (currentX==cells[0].innerHTML && currentX==cells[4].innerHTML && currentX==cells[8].innerHTML){
    WinMessageX();
  } else if (currentX==cells[1].innerHTML && currentX==cells[4].innerHTML && currentX==cells[7].innerHTML){
    WinMessageX();
  } else if (currentX==cells[2].innerHTML && currentX==cells[5].innerHTML && currentX==cells[8].innerHTML){
    WinMessageX();
  } else if (currentX==cells[3].innerHTML && currentX==cells[4].innerHTML && currentX==cells[5].innerHTML){
    WinMessageX();
  } else if (currentX==cells[2].innerHTML && currentX==cells[4].innerHTML && currentX==cells[6].innerHTML){
    WinMessageX();
  } else if (currentX==cells[6].innerHTML && currentX==cells[7].innerHTML && currentX==cells[8].innerHTML){
    WinMessageX();
  } else {
    xDontWin = true; // if x doesnt win now we have 1 of 2 condition to draw
  }
}

const oWins = () => {
  if(currentO==cells[0].innerHTML && currentO==cells[3].innerHTML && currentO==cells[6].innerHTML){
    WinMessageO();
  } else if (currentO==cells[0].innerHTML && currentO==cells[1].innerHTML && currentO==cells[2].innerHTML){
    WinMessageO();
  } else if (currentO==cells[0].innerHTML && currentO==cells[4].innerHTML && currentO==cells[8].innerHTML){
    WinMessageO();
  } else if (currentO==cells[1].innerHTML && currentO==cells[4].innerHTML && currentO==cells[7].innerHTML){
    WinMessageO();
  } else if (currentO==cells[2].innerHTML && currentO==cells[5].innerHTML && currentO==cells[8].innerHTML){
    WinMessageO();
  } else if (currentO==cells[3].innerHTML && currentO==cells[4].innerHTML && currentO==cells[5].innerHTML){
    WinMessageO();
  } else if (currentO==cells[2].innerHTML && currentO==cells[4].innerHTML && currentO==cells[6].innerHTML){
    WinMessageO();
  } else if (currentO==cells[6].innerHTML && currentO==cells[7].innerHTML && currentO==cells[8].innerHTML){
    WinMessageO();
  } else {
    oDontWin = true; // if o doesnt win now we have 1 of 2 condition to draw
  }
}

const draw = () => {
  if (cells[0].innerHTML && cells[1].innerHTML && cells[2].innerHTML && cells[3].innerHTML
      && cells[3].innerHTML && cells[4].innerHTML && cells[5].innerHTML && cells[6].innerHTML
      && cells[7].innerHTML && cells[8].innerHTML){
        if(oDontWin && xDontWin){
          alert("Cats game!");window.location.reload()
        }
  }
}
