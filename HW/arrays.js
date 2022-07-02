// const arrNumbers = [1,2,3,4,5,6,7,8,9,10];
// let evenNum = [];
// let oddNum = [];


// for(let i = 0; i<arrNumbers.length; i++){
//     let number = arrNumbers[i];
//     if(number === 0){
//         continue
//     }else if(number %2 ===0){
//         evenNum.push(arrNumbers[i]);
//     }else if(number %2 !==0){
//         oddNum.push(arrNumbers[i]);
//     }
// };


// console.log(evenNum);
// console.log(oddNum);

let storyText = "Беше мръсна жега навън, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day."
const insertX = ['Willy the Goblin','Big Daddy','Father Christmas'];
const insertY = ['the soup kitchen','Disneyland','the White House'];
const insertZ = ['spontaneously combusted','melted into a puddle on the sidewalk','turned into a slug and crawled away'];

let xItem = 'Willy the Goblin';
let yItem = 'Big Daddy';
let zItem = 'Father Christmas';

let newStory = storyText;
newStory = newStory.replace(':insertx:',xItem);
newStory = newStory.replace(':inserty:',yItem);
newStory = newStory.replace(':insertz:',zItem);
console.log(newStory);
