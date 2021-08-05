// The superclass Elevator, has 9 out of the 11 total floors - the 9 that both A and B have
// it has the functions that can be call on both elevators
class Elevator {
  constructor(currentFloor) {
    this.floors = [0,1,2,3,4,5,6,7,8,9];
    this.currentFloor = this.floors[0];
  }
  call(passengerFloor){
    console.log(this.currentFloor);
    console.log(passengerFloor-this.currentFloor+' Seconds to arrived at the passenger floor');
  }
  up(){
    console.log(`The elevator is going up, currently at ${this.currentFloor+1}`);
  }
  down(){
    console.log(`The elevator is going down, currently at ${this.currentFloor-1}`);
  }
}

// Creating the Elevators A and B with more specific functions
class ElevatorA extends Elevator {
  constructor(floors,currentFloor) {
    super(floors,currentFloor);
    this.floors.push(10);
    const random = Math.floor(Math.random() * this.floors.length);
    this.currentFloor = this.floors[random];
  }
  call(passengerFloor){
    super.call(passengerFloor)
    console.log(`the elevetor is now at : ${this.currentFloor}`);
  }
  up(){
    super.up()
    if (this.currentFloor > 8) {
      console.log(`you're currently at ${this.currentFloor} you cannot go up`);
    } else {
      this.currentFloor += 1;
    }
  }
  down(){
    super.down()
    if (this.currentFloor == -1 ) {
      console.log(`you're currently at ${this.currentFloor} you cannot go down`);
    } else {
      this.currentFloor -= 1;
    }
  }
}

// Elevator B
class ElevatorB extends Elevator {
  constructor(floors,currentFloor) {
    super(floors,currentFloor);
    this.floors.unshift(-1);
  }
}


const person1 = new ElevatorA ();
const person2 = new ElevatorB ();

person1.call(7);
console.log(person1.currentFloor);
person1.up();
person1.up();
person1.up();
console.log(person1.currentFloor);
person1.down();
console.log(person1.currentFloor);
