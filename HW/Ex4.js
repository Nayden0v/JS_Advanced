// function Cocos(size){
//     this.size = size;
//     this.getSize = function(){
//         if (size >= 10){
//             return "The Coco is big!"
//         }else{
//             return "The Coco is small!"
//         }
//     }
// }

// let coco = new Cocos(9);
// // coco.size = 12;
// // console.log(coco.size);
// console.log(coco.getSize());

// const array = ['a', 'b'];
// const elements = [0, 1, 2];
// array.push.apply(array, elements);
// console.info(array); // ["a", "b", 0, 1, 2]

// 'use strict';

// var obj = { // does not create a new scope
//   i: 10,
//   b: () => console.log(this.i, this),
//   c: function() {
//     console.log(this.i, this);
//   }
// }

// obj.b(); // prints undefined, Window {...} (or the global object)
// obj.c(); // prints 10, Object {...}

// const person = {
//   name: ['Bob', 'Smith'],
//   age: 32,
//   // country: "USA",
//   bio() {
//     console.log(`${this.name[0]} ${this.name[1]} is ${this.age} years old from ${this.country}.`);
//   },
//   introduceSelf() {
//     console.log(`Hi! I'm ${this.name[0]}.`);
//   }
// };
// person.country = "USA";

// person.bio();
// "use strict";
// Do not change the object
// const counter = {
// 	currentCount : 0,
// 	tick(){
// 		this.currentCount++;
// 		console.log(this.currentCount);
// 	}
// }

// let countdown = function(times) {
// 	const delay = 1000;
// 	while(times){
// 		setTimeout(() => {counter.tick()}, delay*times);
// 		times--;
// 	}
// }

// countdown(3);

// function foo(){
//  this.count = 1
//   this.count++;
//   console.log(this.count);
// }

// function bar(){
//   return foo;
// }
// setTimeout(bar(),2000);

// const counter = {
// 	currentCount : 0,
// 	tick(){
//     this.currentCount++;
// 		console.log(this.currentCount);
// 	}
// }

// function count(){
//   return counter.tick();
// }

// let countdown = function(times) {
// 	const delay = 1000;
// for(let i = 1; i <= times; i++){
// 		setTimeout(count, delay*i);
// 	}
// }

// countdown(5);

// const cat = {
//   name : 'Bertie',
//   breed : 'Cymric',
//   color : 'white',
//   greeting: function() {
//     console.log(`Hello, said ${ this.name } the ${ this.breed }.`);
//   }
// }

// const cat2 = Object.create(cat);
// // cat2.greeting();

// cat2.name = "Spas";
// console.log(cat2.name,cat.name);

// const animals ={
//   eat(){
//     console.log(`${this.name} is eating`);
//   }
// }

// function Lion(name){
//   this.name = name
//   this.eat = animals.eat
// }

// const leo = new Lion('Leo')

// leo.eat();

// function Cats(name){
//   this.name = name
// }

// Cats.prototype.eat = function(){
//   console.log(`${this.name} is eating`);
// }

// const leo = new Cats('Leo')

// leo.eat = function(){console.log(`${this.name} is walking`);};
// leo.eat()


// const car = {
//   manifacturer: undefined,
//   speed:100,
//   drive(){
//     console.log(`${this.manifacturer} is driving with ${this.speed}km`);
//   }
// }
// car.drive()

// function catFactory(name){

//   let obj = {};
//   obj.name = name

//   return obj;
// }

// catFactory.prototype.eat = function(){
//   console.log(`${this.name} is eating`);
// }


// const cat1 = catFactory('Cat1')
// const cat2 = catFactory('Cat1')

// create 'Car' constructor
// var Car = function(manufacturer, speed){
//   this.manufacturer = manufacturer || undefined;
//   this.speed= speed || 100;
// }
// Car.prototype= {
//   drive: function(){
//     if (this.wings >= 2){
//       console.log(`Flying wiht ${this.speed} km/h`);
//     }else{
//       console.log(`Driving wiht ${this.speed} km/h`);
//     }
//   }
// }

// // create 'car' object
// let car = {
//   manufacturer: undefined,
//   speed: 100,
//   drive: function(){
//     if (this.wings >= 2){
//       console.log(`Flying wiht ${this.speed} km/h`);
//     }else{
//       console.log(`Driving wiht ${this.speed} km/h`);
//     }
//   }
// }

// /* --------------------------- Person constructor --------------------------- */
// function Person(name, age){
// this.name = name;
// this.age = age;
// }

// Person.prototype.greet = function(){
//   console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old`);
// }


// /* --------------------------- Manager constructor -------------------------- */
// function Manager(name, age, managed){
// Person.call(this,name,age);
// this.managed = ["",""]
// }
// Manager.prototype = Object.create(Person.prototype);


// /* -------------------------- Developer constructor ------------------------- */
// function Developer(name, age, skillset){
//   Person.call(this,name,age);
//   this.skillset = skillset
// }
// Developer.prototype = Object.create(Person.prototype)
// Developer.prototype.greet = function(){
//   console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old I know ${this.skillset}`);
// }

// /* ----------------------------- Create Objects ----------------------------- */
// // Developer instances
// let maria = new Developer('Maria Popova', 23, ['Python', 'Machine Learning']);
// let pesho = new Developer('Petar Petrov', 19, ['JavaScript', 'Angular', 'React', 'Vue']);

// // Manager instances
// let gates = new Manager('Bill Gates', 43, [maria, pesho]);

// /* ----------------------------- Use the objects ---------------------------- */
// maria.greet();
// pesho.greet();
// gates.greet();

// function foo(a,b,c){
//   console.log(`a=${a}, b=${b}, c=${c}`)
// }

// let arr = [1,2,3];

// pass foo three arguments with spread operator (ES6 way):
// foo(...arr); // a=1, b=2, c=3

// const add = (x,y)=> {console.log(x+y)};

// add(4,5)

// function sum(x,y){
//   console.log(x+y);
// }

// sum(4,5);
// console.log(x,y);

// const cube = function(x){
//   return x**3
// }

// console.log(cube(2));

let x =1,y=2;



