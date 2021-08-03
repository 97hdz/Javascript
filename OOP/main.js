
function FIFAplayer(name, age) {
  this.name = name;
  this.age = age;
}

function SA_Footballer(name,age,region) {
  FIFAplayer.call(this, name, age);
  this.region = region;
}

const neymar = new SA_Footballer('Neymar',29,'CONMEBOL');

console.log(neymar.name);

SA_Footballer.prototype = Object.create(FIFAplayer.prototype);
SA_Footballer.prototype.constructor = SA_Footballer;
console.log(SA_Footballer.prototype);

function EU_Footballer(name, age, region) {
  FIFAplayer.call(this, name, age);
  this.region = region;
}

const iniesta = new EU_Footballer('Andres',36,'EUROPA');
console.log(iniesta.region);
