'use strict';



const Person=function(Fname,bYear){
    this.FirstName=Fname;
    this.birthYear=bYear;
    console.log(this);
    //Not a good practice
    // this.calcAge=function(){
    //     return `2090.${this.birthYear}`
    // }
}
let hanan=new Person('Hanan',1989);
let aatif=new Person('Atif Yousuf',2000);
let numan=new Person('Mir Numan',2003);
let ravi='ss';
console.log(hanan instanceof Person);
console.log(ravi instanceof Person);
Person.prototype.calcAge=function(){
    console.log(2090-this.bYear);
}
console.log(hanan.__proto__===Person.prototype);
console.log(Person.__proto__===Person.prototype);
Person.prototype.species='Homosapiens';
console.log(hanan.species);
console.log(Person.prototype.isPrototypeOf(hanan));
console.log(Person.prototype.isPrototypeOf(aatif));
console.log(Person.prototype.isPrototypeOf(Person));
console.log(hanan.hasOwnProperty('FirstName'));
console.log(hanan.hasOwnProperty('calcAge'));
console.log(Person.prototype.hasOwnProperty('calcAge'));
console.dir(hanan.__proto__.__proto__.__proto__);
let arr=[1,2,4,5,3,4,6,6,2,1];
console.log(arr.__proto__);
Array.prototype.removeDuplicate=function(){
    return [...new Set(this)]
}
console.log(arr.removeDuplicate());
let myName='Hanan';
console.log(myName.__proto__.__proto__);
//-----------------------------------------------------CODING CHALLENGE #1-----------------------------------------------------------
let Car= function(make,speed){
    this.make=make;
    this.speed=speed;
}
Car.prototype.accelarate=function(){
    this.speed+=10;
    console.log(`This accelarted speed of ${this.make} is`,this.speed);
}
Car.prototype.brake=function(){
    this.speed-=5;
    console.log(`Brake applied now the speed of ${this.make}`,this.speed);
}
let creta=new Car('Hyundai',120);
let swift=new Car('Maurti',90);

creta.accelarate();
swift.accelarate();
creta.brake();
swift.brake();
//---------------------------------------------------------------------CLASSES--------------------------------------------
//////////////////////////////////////////////////////////////////////////////////////////////
// const PersonCl=class{

// }

class PersonCl{
constructor(fullName,DOB){
    this.fullName=fullName;
    this.birthYear=DOB;
}
calcAge(){
    console.log(`The age of ${this.firstName} is ${2090-this.birthYear}`)
}
set fullName(name){
if(name.includes(' ')) this._fullName=name
else alert('Enter Full Name');
}
get fullName(){
    return this._fullName;
}
}
let abrar=new PersonCl('Abrar Azad',1880);
let sunny=new PersonCl('SunnyBlondey',1998);
console.log(abrar);
abrar.calcAge();
sunny.calcAge();
PersonCl.prototype.greet=function(){
    console.log(`Hello from ${this.firstName}`);
}
abrar.greet();
console.log(PersonCl.prototype);



let account={
name:'Hanan Mir',
movements:[200,400,500,600],
get latest(){
console.log(this.movements.slice(-1).pop())
},
set latest(mov){
this.movements.push(mov)
console.log(this.movements);
}
}
account.latest;
account.latest=900;
let PersonNew={
    calcAge(){
        console.log(`The age of ${this.firstName} is ${2090-this.bYear}`)
    },
    init(fname,bYear){
        this.firstName=fname;
        this.bYear=bYear;
    }
}
const shahid=Object.create(PersonNew);
shahid.init('Shahid Azad',2020);
shahid.calcAge();
//--------------------------------CODING CHALLENGE #2------------------------------
class CarCl{
    get speedUS(){
        return this.speed/1.6;
    }
    set speedUS(speed){
        this.speed=speed*1.6;
    }
accelarate(){
    this.speed+=10;
    console.log(`This accelarted speed is`,this.speed);
}
brake(){
    this.speed-=5;
    console.log(`Brake applied now the speed of`,this.speed);
}
}
let hyundai=new CarCl();
hyundai.speedUS=60;
console.log(hyundai.speedUS);
hyundai.accelarate();
hyundai.brake();






