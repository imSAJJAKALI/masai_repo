// Function constructor
function FourWheeler(wheels,model, color, speed, fuel) {
    this.wheels=wheels;
    this.model=model;
    this.color=color;
    this.speed=speed;
    this.fuel=fuel;
    Object.setPrototypeOf(FourWheelerObject,this)
}
FourWheeler.prototype.setSpeed=function(x){
    this.speed=x;
}
FourWheeler.prototype.updateColor=function(x){
    this.color=x;
}
FourWheeler.prototype.updateFuel=function(x){
    this.fuel=x;
}

// Parent object for Object.create
let FourWheelerObject = {};


// Store function contructor object here
var car1=new FourWheeler(4,20,'blue',50,10)

// Store Object.create here
var car2=Object.create(FourWheelerObject);


export { car1, car2 };
