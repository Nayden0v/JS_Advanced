// const select = document.querySelector('select');
// const html = document.querySelector('html');
// document.body.style.padding = '10px';

// function update(bgColor, textColor) {
//   html.style.backgroundColor = bgColor;
//   html.style.color = textColor;
// }

// select.addEventListener('change', () => ( select.value === 'black' ) ? update('black','white') : update('white','black'));

// let response;
// let score = 14;
// let machineActive = true;

// if(machineActive) {
// 	switch(score){
//     case :
// response = "shit"
// break;
//     case score > 10:
// response = "good"
// break;
// }
// } else {
//   response = 'The machine is turned off. Turn it on to process your score.';
// }

// console.log(response);

/*-----------------------------------------map()---------------------------------------------*/

// function toUpper(string) {
//   return string.toUpperCase();
// }

// const cats = ['Leopard', 'Serval', 'Jaguar', 'Tiger', 'Caracal', 'Lion'];

// const upperCats = cats.map(toUpper);

// console.log(upperCats);

/*-----------------------------------------filter()---------------------------------------------*/

// function lCat(cat) {
//   return cat.startsWith('L');
// }

// const cats = ['Leopard', 'Serval', 'Jaguar', 'Tiger', 'Caracal', 'Lion'];

// const filtered = cats.filter(lCat);

// console.log(filtered);

/*-----------------------------------------for()---------------------------------------------*/

// let result;
// function calculate() {
//   for (let i = 1; i < 10; i++) {
//     const newResult = `${i} x ${i} = ${i * i}`;
//     console.log(newResult);
//   }

//   console.log(`\n...finished!`);

// }
// calculate();

/*----------------------------------------(for...of)-----------------------------------------*/


// const people = ['Chris', 'Anne', 'Colin', 'Terri', 'Phil', 'Lola', 'Sam', 'Kay', 'Bruce'];

// const admitted = [];
// const refused = [];
// let admittedPerson = 'Admit: ';
// let refusedPerson = 'Refuse: ';

// for(const person of people){
//   if(person == "Phil" || person == "Lola"){
//     refusedPerson += `${person}, `;
//     refused.push(person);
//   }else if(person !== "Phil" && person !== "Lola"){
//     admittedPerson += `${person}, `
//     admitted.push(person);
//   }
//   }

// console.log(refusedPerson.replace('Lola,','Lola'));
// console.log(admittedPerson.replace('Bruce,','Bruce'));
// console.log(admitted);
// console.log(refused);


/*-----------------------------------------while()---------------------------------------------*/
// const cats = ["Bari","lari","Gary"];
// let i = 0; 
// while(i<cats.length){
//   console.log(cats[i]);
//   i++;
// }

// function removeItemOnce(arr, value) {
//   let index = arr.indexOf(value);
//   if (index > -1) {
//     arr.splice(index, 1);
//   }
//   return arr;
// }

// function removeItemAll(arr, value) {
//   let i = 0;
//   while (i < arr.length) {
//     if (arr[i] === value) {
//       arr.splice(i, 1);
//     } else {
//       ++i;
//     }
//   }
//   return arr;
// }
// console.log(removeItemOnce([2,5,9,1,5,8,5], 5))
// console.log(removeItemAll([2,5,9,1,5,8,5], 5))

/*-----------------------------------------Objects and Functions---------------------------------------------*/

let devFactory = function(name, salary){
  let obj = {};

  obj.name = name;
  obj.salary = salary;
  obj.getSalary = function(){
    return salary;
  }
  obj.increaseSalary = function(incrValue, pass){
    if(pass == "somersby"){
      // incrValue += salary
      salary += incrValue;
      console.log(salary);
    return salary;
    
    }else{
      console.log('Wrong pass!');
    }

  }
  
  return obj;
}

let dev1 = devFactory('Ivan', 1500);
// console.log(`${dev1.name} salary is ${dev1.getSalary()}`);
dev1.increaseSalary(500,"somersby");

// let AppleConstructor = function( color, prices ){
//   console.log("AppleConstructor is called!");
//   this.color = color;
//   this.prices = prices;

//   this.calcMinPrice = function(){
//     return  Math.min( ...this.prices ); // from ES6
//   };
//   this.calcMaxPrice = function(){
//     return  Math.max( ...this.prices ); // from ES6
//   };
// }

// // objects constructing:
// let apple1 = new AppleConstructor("red", [3.5, 2.05, 2.5]);
// let appleN = new AppleConstructor("green", [1.80, 2.10, 2.40]);

// // objects usage:
// console.log( "apple1 min price: ", apple1.calcMinPrice());


// Object.objsize = function(Myobj) {
//   let osize = 0, key;
//   for (key in Myobj) {
//       if (Myobj.hasOwnProperty(key)) osize++;
//   }
//   return osize;
// };

// let student = { 
// name : "David Rayy", 
// sclass : "VI", 
// rollno : 12 };

// let objsize = Object.objsize(student);
// console.log('Size of the current object : '+objsize);

// function Cylinder(cyl_height, cyl_diameter) {
//   this.cyl_height = cyl_height;
//   this.cyl_diameter = cyl_diameter;
// }

// Cylinder.prototype.Volume = function () {
//   var radius = this.cyl_diameter / 2;
//   return this.cyl_height * Math.PI * radius * radius;
// };

// var cyl = new Cylinder(7, 4);
// // Volume of the cylinder with four decimal places.
// console.log('volume =', cyl.Volume().toFixed(4));

// function circle(radius){
//   this.radius = radius
//   this.area = function(){
//     return Math.PI*this.radius**2;
//   };
//   this.perimeter = function(){
//     return 2*Math.PI*this.radius;
//   };
// }

// let ccc = new circle(5);
// console.log(ccc.area(),ccc.perimeter());

// const myArray = ['I', 'love', 'chocolate', 'frogs'];
// const madeAString = myArray.join(' ');
// console.log(madeAString);

// const names = ['Chris', 'Li Kang', 'Anne', 'Francesca', 'Mustafa', 'Tina', 'Bert', 'Jada']
// let para = "";

// // Add your code here

// (function chooseName(x,y){
//  let random =  function(min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min) + min);
//   };
// para = names[random(x,y)];
// console.log(para);
// })(2,7)


