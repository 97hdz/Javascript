// The superclass Elevator, has 9 out of the 11 total floors - the 9 that both A and B have
// it has the functions that can be call on both elevators
//
// Variables --> this.floors = the floors that A and B both have
//               this.currentFloor = the current floor / just declaring
//               this.time = the time that'll be use to determine how many seconds one person goes to X to
//               this.isCall = a boolean value, that'll be true once the elevator is called otherwise the up and down function would not work
//
// Functions ---> call(passengerFlor) = The passenger will be able to call the elevator to the floor they're on ex. call(7) if they're on the 7th floor
//                                      the time will get the absolute value between the elevator's floor and the passenger's floor
//                                      it will console Elevator floor, passengerFlor and time, and the boolean value isCall will be set to true
//                up(goToUp) = This function will only work if the isCall value is set to true hence you have to first use the call() function, it will go
//                             up by one, if you dont give any input to the function otherwise you can go to the floor you like, if use in default - just going
//                             one floor up the time will increase just by one, if you choose the specific floor the absolute value of time will be calculated again
//                down(goToDown) = Same functionalities of the up() function but in this case the elevator will be going down
//
//
//Elevators ----> Elevator = the super class Elevator is used just to constructor the core of the other two elevators, it will not work if try to use it by calling '... new Elevator ()'
//                           it doesn't have the currentFloor value properly set ( it is undefined )
//                ElevatorA & B = they are programmed very similar but with the main difference of the floors the they're able to access to
//                                both elevator will get another floor value the array list, using push and unshift
//                                he elevators will be on a random floor
//                                both elevators will get the superclass values of the constructor, not all but the ones that we will be able to modify to use the elevators correctly
//
//
class Elevator {
  constructor() {
    this.floors = [0,1,2,3,4,5,6,7,8,9];
    this.currentFloor ;
    this.time = 0;
    this.isCall;
    this.elevator ;
  }
  call(passengerFloor){
    this.time = Math.abs(passengerFloor-this.currentFloor);
    console.log(`${this.elevator} is currently at : ${this.currentFloor} floor`);
    console.log(`${this.time} Seconds to arrived at the passenger floor ( ${passengerFloor} )`);
    this.isCall = true;
  }
  up(goToUp){
    if (this.isCall) {
      console.log(`${this.elevator} is going up, currently at ${this.currentFloor+1}`);
      this.time += 1;
    } else {
      console.log(`You have to call the elevator first`);
    }
  }
  down(goToDown){
    if (this.isCall) {
      console.log(`${this.elevator} is going down, currently at ${this.currentFloor-1}`);
      this.time += 1;
    } else {
      console.log(`You have to call the elevator first`);
    }
  }
}

// Creating the Elevators A and B with more specific functions
class ElevatorA extends Elevator {
  constructor(floors,currentFloor,elevator) {
    super(floors,currentFloor,elevator);
    this.floors.push(10);
    this.elevator = 'Elevator A';
    // use random to place the elevator in a random floor
    const random = Math.floor(Math.random() * this.floors.length);
    this.currentFloor = this.floors[random];
  }
  call(passengerFloor){
    super.call(passengerFloor)
    console.log(`the elevetor A is now at : ${passengerFloor}`);
    this.currentFloor = passengerFloor;
  }
  up(goToUp){
    super.up(goToUp)
    if (this.currentFloor > 8 && this.isCall) {
      console.log(`you're currently at ${this.currentFloor} you cannot go up`);
    } else {
      this.currentFloor += 1;
    }
  }
  down(goToDown){
    super.down(goToDown)
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

person1.call(9);
person1.up();
