/* --------------------------- Person constructor --------------------------- */
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
// this.managed = managed
// }
// Manager.prototype = Object.create(Person.prototype);
// Manager.prototype.greet = function(){
//   console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old I managed ${this.managed}`);
// }


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
// let gates = new Manager('Bill Gates', 43, ["maria", "pesho"]);

// /* ----------------------------- Use the objects ---------------------------- */
// maria.greet();
// pesho.greet();
// gates.greet();


/* -----------------------------------------------------------------------------------*/
/* ----------------------------- Same task different way ---------------------------- */
/* -----------------------------------------------------------------------------------*/

class Person {
  name;
  age;
  constructor(name,age){
      this.name = name;
      this.age = age;
  }
  greet(){
      console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old`);
  }

}

  class Manager extends Person{
      managed;
  constructor(name,age,managed){
  super(name,age)
  this.managed = managed
  }

  greet(){
      console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old I managed ${this.managed}`);
  }

}
  class Developer extends Person {
      skillset;
      constructor(name,age,skillset) {
          super(name,age)
          this.skillset = skillset        
      }

      greet(){
          console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old I know ${this.skillset}`);
      }
  }
const maria = new Developer("Maria Popova",23,['Python', 'Machine Learning'])
const pesho = new Developer('Petar Petrov', 19, ['JavaScript', 'Angular', 'React', 'Vue'])
const gates = new Manager("Bil Gates",50,["Maria","Pesho"])
maria.greet();
pesho.greet();
gates.greet();