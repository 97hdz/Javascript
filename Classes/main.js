
class Vehicle {
  constructor(make, model, year, weight) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.weight = weight;
    this.isNeedMaintenance = false;
    this.tripsSinceMaintenance = 0;
  }
}

class Car extends Vehicle {
  constructor(make,...tripsSinceMaintenance) {
    super(make,...tripsSinceMaintenance);
    this.isDriving = false;
  }
  drive(){
    console.log(`The vehicle ${this.make} ${this.model} is driving`);
    this.isDriving = true;
  }
  stop(){
    if (this.isDriving === true) {
      console.log(`The vehicle ${this.make} ${this.model} has stop driving`);
      this.isDriving = false;
      this.tripsSinceMaintenance += 50;
    } else {
      console.log(`The vehicle ${this.make} ${this.model} was not driving`);
    }
  }
  tripsNumber(){
    console.log(`The vehicle ${this.make} ${this.model} has made ${this.tripsSinceMaintenance} trips since maintenance`);
    if (this.tripsSinceMaintenance > 100) {
      console.log(`The vehicle ${this.make} ${this.model} needs maintenance`);
      this.isNeedMaintenance = true;
    } else {
      console.log(`The vehicle ${this.make} ${this.model} does not need maintenance yet`);
    }
  }
  repairCar(){
    this.isNeedMaintenance = false;
    this.tripsSinceMaintenance = 0;
    console.log(`The vehicle ${this.make} ${this.model} has been repaired, you can continue to drive`);
  }
}

const carN1 = new Car ('audi','a7',2012,'800 kg');
const carN2 = new Car ('mercedes','class-c',2018,'908 kg');
const carN3 = new Car ('ferrari','f40',2015,'876 kg');

carN1.drive();
carN1.stop();
carN1.drive();
carN1.drive();
carN1.stop();
console.log(carN1);
carN1.tripsNumber();
console.log(carN1);
carN1.repairCar();
console.log(carN1);
