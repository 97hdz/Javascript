const Socrates = "Socrates"
const Men = [Socrates]
const Mortals = [Men, "animals"]

// defining the values of the variables used in the function ( you can do it more than once)
const nombre = "Socrates"

// Making a function that work with two variables ' name and lastanme '
function Verifica(){
  if(!nombre){
    console.log("There's no value")
  }
  else {
    // using the 'typeof' function to verify that the value in name isn't a number
    let kind = typeof nombre
    if (kind=="string" && Men.includes(nombre)){
      return true;
    }
  }
}

if(Verifica()==true){
  console.log(nombre+ " is mortal.")
}
