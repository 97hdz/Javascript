// Difference between destructuring an object and destructuring an array
//when would each be appropriate to used
// 1 example with objects and 1 for arrays

// Destructuring an Array-
// one Difference can be that objects in general are much more complex, so it would
//be even better if you can easly manipulate the data inside

const randomNumbers = [1,7,90,123,54,33,11,20,8,1];
const [q,w,e,r,t,y,u,i,o,...p] = randomNumbers;

console.log(q,w,e,r,t,i,p);

const [num1,num2,num3,...otherNum] = randomNumbers;
console.log(num1,num2,num3);
console.log(otherNum);

//Destructuring an Object

const squadre = {difensore: "Bonucci", centrocampista: "Arthur", attaccante: "Zlatan"};
const { difensore, centrocampista, attaccante} = squadre;
console.log(difensore,centrocampista,attaccante);

let arsenal, milan, atletico;
const squadre2 = {arsenal: "Aubameyang", milan: "Romagnoli", atletico: "Suarez"}

console.log(squadre2);

({arsenal, milan, atletico} = squadre2);

console.log(arsenal,milan);

console.log(`Arsenal players are : ${arsenal} , Milan players are : ${milan} and Atletico players are : ${atletico}`);
