/* Sass Document */

const close = document.querySelector('.answerClose');
const botton1 = document.getElementById('btn1');
const botton2 = document.getElementById('btn2');
const block = document.querySelector('.answer');


let widthScreen = document.documentElement.clientWidth;
let HeightScreen = document.documentElement.clientHeight;




function getRandomInt(min, max){
  return Math.floor(Math.random() * (max - min + 1)) + min;

}

botton1.addEventListener('click', function () {
    block.classList.add('open');
   
   return false; 
});

close.addEventListener('click', function(){
    block.classList.remove('open');
    return false;
});

botton2.addEventListener('mousedown', function (){
    
    botton2.style.right = (widthScreen - getRandomInt(100, widthScreen)) +"px";
    botton2.style.top = (HeightScreen - getRandomInt(350, HeightScreen)) +"px";
    

     return false;
});






