function Cocos(size){
    this.size = size;
    this.getSize = function(){
        if (size >= 10){
            return "The Coco is big!"
        }else{
            return "The Coco is small!"
        }
    }
}

let coco = new Cocos(9);
// coco.size = 12;
// console.log(coco.size);
console.log(coco.getSize());