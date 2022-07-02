/*------ Ex.1 ------*/

// const arr = [4,8,9];

// function endMsg(x,y){
//     if (x>y){
//     console.log(`X e po-golqmo ot Y`);
//     }else{
//         console.log('Error');
//     }
// }

// endMsg(arr[2],arr[1])

/*------ Ex.2 ------*/

// function ageGroup(age){
//     let status;
//     if(age < 12){
//         status = "child"
//     }else if(age > 12 && age < 18){
//         status = "teen"
//     }else{
//         status = "adult"
//     }
//     console.log(status);
// }
// ageGroup(25);


/*------ Ex.3 ------*/


// var x = 1;

// var foo = function() {
// 	var x = 2;

// 	let bar = function(x) {
// 		console.log("x in bar = ", x) //99
// 	};
// 	bar(99);

// 	console.log("x in foo = ", x); //2
// }

// foo();
// console.log("x in main = ", x); //1

/*---Да се дефинира функция , която връща лицето на правоъгълник, със зададени дължина и ширина---*/

// let getWidth = 5;
// let getHeight = 4;

// let area = rectang(getWidth, getHeight);

// function rectang(){
//     getWidth;
//     getHeight;
//     return getWidth*getHeight;
    
// }

// console.log(`The area of rectangle is: ${area}`);   



/*--- Да се дефинира функцията findMaxEven(), която да връща максималното четно число от подаденият й масив. ---*/

// let arrNumbers = [2, -4, 5, 6, 8, 15, 1];
// let max = maxEven(arrNumbers);


// function maxEven(arr){
//     evenNum = [];
//     for(let i=0; i<arr.length; i++){
//         if(arr[i] % 2 === 0){
//             evenNum.push(arr[i]);
//         }
       
//     } 
//     return Math.max(...evenNum)
// }
// console.log(`The max even number of ${arrNumbers} is ${max}`);


/*---Kато използвате функцията getHighestScoreIndex() изпишетe в конзолата името на студента с най-висока оценка.---*/

// let students = ["Ivan", "Pesho", "Maria"];
// let scores = [5,4,6];

// function getHighestScoreIndex(){
//     let maxScore = Math.max(...scores);
//     let maxIndex = scores.indexOf(maxScore);

//     return maxIndex;
// }

// console.log(`${students[getHighestScoreIndex()]} has the highest score: ${scores[getHighestScoreIndex()]}`);


/*---Да се дефинира функция SumEven2DimArrayElements(), която връща сумата от четните елементи на подаденият й двумерен масив.---*/

let arr = [
	[1,2,3],
	[4,5,6]
];

let sum = SumEven2DimArrayElements(arr);

function SumEven2DimArrayElements(){
    let evenNum1=[];
    let evenNum2=[];
    for(let i=0;i<arr.length; i++){
        if(arr[0][i] % 2 === 0){
            evenNum1.push(arr[0][i]);
        }
     
    }
    for(let i=0;i<arr[1].length; i++){
        if(arr[1][i] % 2 === 0){
            evenNum2.push(arr[1][i]);
        }
     
    }

    let evenNum3 = [0.185224,0.311118,0.16322,0.113306,0.149009,0.134133,0.164736,0.12736,0.212562,0.151623,0.116673,0.126409,0.09607,0.166056,0.096072,0.104531,0.166031,0.123015,0.132822,0.120814,-0.245,0.178044];
    let sumEven = evenNum3.reduce(function(a,b){
        return a + b;
    }, 0);
    
return (sumEven);

    
}

console.log(sum);


/*----- "Морски шах" -----*/


// let board2d = [
// 	[ 0,  0 , 0 ],
// 	[ 0,  0 , 0 ],
// 	[ 0, 'x', 0 ]
// ];

// function showConsoleBoard( board ){	
// 	let boardStr = "";
// 	for (let i = 0; i < board.length; i++) {
// 		boardStr += "|";		

// 		for (let j = 0; j < board[i].length; j++) {
// 			boardStr += board[i][j] + "|";
// 		}
// 		boardStr += "\n";
// 	}

// 	console.log(boardStr);
// }

// showConsoleBoard(board2d);