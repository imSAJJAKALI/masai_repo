// Problem 1. 
Character.prototype.setName=function (name){
    this.name=name;
}
function Character(name) {
     this.name="unnamed";
}
Warrior.prototype.increaseStrength=function(x){
    this.strength+=100
}
Warrior.prototype.decreaseStrength=function(x){
    this.strength=this.strength-100

}
Object.setPrototypeOf(Warrior.prototype,Character.prototype)
function Warrior(strength) {
       Character.call(this,strength)
       this.strength=0;

}
Knight.prototype.setWeapon=function(weapon){
     this.weapon=weapon;
}
Object.setPrototypeOf(Knight.prototype,Warrior.prototype)
function Knight(weapon) {
     Warrior.call(this,weapon)
     this.weapon='no weapon'
}

// Problem 2.

class Vehicle {
constructor(make){
  this.make=make;
}
  setMake(x){
    this.make=x;
  }
}

class Car extends Vehicle {
    constructor(make,model){
       super(make)
       this.model=model;
    }
    setMake(x){
        this.make=x
    }

}

class Truck extends Car {
   constructor(make,bedSize){
       super(make)
       this.bedSize=bedSize;
   }
   setMake(x){
    this.make=x
}

}

class Motorcycle extends Truck {
     constructor(make,engineSize){
        super(make)
        this.engineSize=engineSize;
     }
     setMake(x){
        this.make=x
    }
}




export { Character, Warrior, Knight, Vehicle, Car, Truck, Motorcycle}