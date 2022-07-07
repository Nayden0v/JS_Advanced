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
const counter = {
	currentCount : 0,
	tick(){
		this.currentCount++;
		console.log(this.currentCount);
	}
}

let countdown = function(times) {
	const delay = 1000;
	while(times){
		setTimeout(() => {return counter.tick()}, delay*times);
		times--;
	}
}

countdown(3);