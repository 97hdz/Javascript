// DUA --- <img src='https://i.ibb.co/6Bzp71H/dua.png' width='245' height='200'>

const target = document.getElementsByClassName("Board");
const clickDiv = target[0];

clickDiv.addEventListener("click", LogEvent);

function LogEvent(event){
  console.log(event.target)

  if(event.target.id==="one"){
    console.log("HAHAHAHHAHAHAHA")
    document.getElementById("one").innerHTML = " X ";
  }

}
