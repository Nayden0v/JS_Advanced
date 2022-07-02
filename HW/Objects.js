// function devFactory(firstName,surName,skills){
//     let obj = {};

//     obj.firstName = firstName;
//     obj.surName = surName;
//     obj.skills = skills;

//     obj.applyForJob = function(){
//         var skillsStr = this.skills.toString();
//         console.log(`Hi, I'm ${obj.firstName} ${obj.surName}. My strongest skills are ${skillsStr}.`);
//     }

//     return obj;
// }


// let dev1 = devFactory("Vesko","Naydenov", ["Python", "Excel", "Java"]);


// dev1.applyForJob();

// let persons = [
// 	{
// 		"gender": "female",
// 		"age": 32,
// 		"firstName": "Ada",
// 		"surName": "Byron"
// 	},
// 	{
// 		"gender": "male",
// 		"age": 42,
// 		"firstName": "Asen",
// 		"surName": "Asenov"
// 	},	
// 	{	
// 		"gender": "male",
// 		"age": 18,
// 		"firstName": "Petar",
// 		"surName": "Petrov"
// 	},
// 	{
// 		"gender": "male",
// 		"age": 33,
// 		"firstName": "Ivan",
// 		"surName": "Ivanov"
// 	}
// ];

// function findYoungestPerson(arr) {
// 	let youngestPerson = [];

// 	for (let i = 0; i < arr.length; i++) {
// 		let person = arr[i];
//         youngestPerson.push(person.age);
// 	}
//     console.log(youngestPerson);

// 	return Math.min(...youngestPerson);
// }


// console.log(findYoungestPerson(persons));

// const beers = [
// 	{name: "Ариана", color: "светло", prices:[1.3, 2, 2.4], town: "София"},
// 	{name: "Ариана", color: "тъмно", prices:[1.4, 2.2, 2.8], town: "София"},
// 	{name: "Каменица", color: "светло", prices:[1.5, 2.5, 3], town: "Пловдив"},
// 	{name: "Загорка", color: "светло", prices:[2, 3, 3.6], town: "Стара Загора"},
// ];
// console.log("The beers array: ", beers);


// for (let i = 0, len = beers.length; i < len; i++) {
// 	const beer = beers[i];
	
// 	console.log(`${beer.name} - ${beer.color}`);
// }

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ЗАДАЧА: намиране на най-евтината бира по 3-та цена:
// да се изпише в конзолата името, цвета и цената на най-евтината бира, като използваме за сравнението 3-тата цена в масива prices:


// let minPrice = [];
// for (let i = 0; i < beers.length; i++){
//   let beer = beers[i].prices[2];
//     minPrice.push(beer);
 
//     }
//     let cheapestBeer = Math.min(...minPrice);
//     console.log(cheapestBeer);


const fruits = ['apples', 'Peaches', 'bananas'];

for(const fruit of fruits){
	console.log(fruit);
}
