const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

let storyText = "Беше мръсна жега навън, тъй че :insertx: оправих се и тръгнах от вкъщи. Когато стигнах до :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day."
const insertX = ['реших да отида на басейн да се разхладя','басейна','Father Christmas'];
const insertY = ['отидох да си купя 1 кофа сладолед','магазина','the White House'];
const insertZ = ['spontaneously combusted','melted into a puddle on the sidewalk','turned into a slug and crawled away'];


randomize.addEventListener('click', result);

function result() {
let newStory = storyText;
let xItem = randomValueFromArray(insertX);
let yItem = randomValueFromArray(insertY);
let zItem = randomValueFromArray(insertZ);
newStory = newStory.replaceAll(':insertx:',xItem);
newStory = newStory.replace(':inserty:',yItem);
newStory = newStory.replace(':insertz:',zItem);
  if(customName.value != "") {
    const name = customName.value;
    newStory = newStory.replace('Bob',name);

  }

  if(document.getElementById("uk").checked) {
    const weight = Math.round(300*0.0714) + ' stone';
    const temperature =  Math.round((94-32)*(5/9)) + ' centigrade';
    newStory = newStory.replace('300 pounds',weight);
    newStory = newStory.replace('94F',temperature);

  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}
