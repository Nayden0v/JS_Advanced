/*======= (Task 1) - Make a program, which will write in the console only the words that starts with letter 't' and are longer than 2 symbols ======*/

// function getWords(str){

// return str.split(' ').filter(w => w[0].includes('t') && w.length > 2);
// }
// let str = "A common mistake that people make when trying to design something completely foolproof is to underestimate the ingenuity of complete fools."

// console.log(getWords(str));



/*==================== (Task 2) - Write a program which will output in the console the sum of the squares of even numbers  ===================*/

// function sumOfSquares(arr){
// 
    // return arr.map(number => number**2).filter(number => number % 2 ===0).reduce((x,y) => x+y);
// }
// 
// const arr = [1,2,3,4,5,6,7,8,9,10];
// 
// console.log(sumOfSquares(arr));

/*====================== (Task 3.1) - Implement calcTotalPrice function, so that it will return the sum of all products price ===================*/

// const products = [
// 	{
// 		code:1,
// 		name:"product1",
// 		category: "music",
// 		price:1
// 	},
// 	{
// 		code:2,
// 		name:"product2",
// 		category: "books",
// 		price:2
// 	},
// 	{
// 		code:3,
// 		name:"product3",
// 		category: "books",
// 		price:3
// 	},
// 	{
// 		code:4,
// 		name:"product4",
// 		category: "music",
// 		price:4
// 	}
// ]

// function calcTotalPrice(products){
//     return products.map(product => product.price).reduce((x,y) => x+y)
// }
// console.log(calcTotalPrice(products));

/*====================== (Task 3.2) - Implement calcTotalPriceByCategory function, so that it will return the price sum of all products matching the given catgory ===================*/

// function calcTotalPriceByCategory(products,category){
//     return products.filter(product => product.category == category).map(product => product.price).reduce((x,y) => x+y)
// } 
// console.log(calcTotalPriceByCategory(products,'music'));

/*===================== (Task 4) - Your task is to create a new array of objects: newTodos, which maps the values of todos so that a todo.completed value is inverted for given todoID ===================*/

// const todos = [
//     {
//       "title": "Lean HMTL",
//       "completed": true,
//       "id": 1
//     },
//     {
//       "title": "Lean React",
//       "completed": false,
//       "id": 2
//     }
// ];

// const todoID = 2;

// const newTodos = JSON.parse(JSON.stringify(todos))
// newTodos[1].completed = true

// console.log(`Original todos:`,todos);
// console.log(`New todos`,newTodos);

/*==================== (Task 5) - Implement findMinPopulationCityName function, so that it will return the name of the city with minimum population  ===============*/

// const cities = [
// 	{name: 'Sofia', population: 1_236_000},
// 	{name: 'Plovdiv', population: 343_424 },
// 	{name: 'Burgas', population: 202_766},
// 	{name: 'Varna', population: 335_177},
// ];

// Using Math.min()
// function findMinPopulationCityName(cities){
//     return cities.filter( city => city.population == Math.min(...cities.map(city => city.population)))[0].name
// }

// Using reduce()
// function findMinPopulationCityName(cities){
//     return cities.filter(city => city.population == cities.map(city => city.population).reduce((a,b)=>a<b?a:b))[0].name
// }

// const minCityName = findMinPopulationCityName(cities)
// console.log(minCityName);

