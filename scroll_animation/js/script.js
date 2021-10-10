'use strict';
//анимация при скролле

let isScrolling = false;
let scrolltop = pageYOffset; // запоминаем положение

 
window.addEventListener("scroll", myScroll, false);

function myScroll(e) {
  
  if (isScrolling == false) {
    window.requestAnimationFrame(function() {
      scrollAnimate(e);
      isScrolling = false;
    });
  }
  isScrolling = true;
}

document.addEventListener("DOMContentLoaded", scrollAnimate, false);

let animItems = document.querySelectorAll("p.animation");
let animItemsSvg = document.querySelectorAll(".anim-svg");
let animItemsSvgN = document.querySelectorAll(".anim-n");

//добавление/удаление класса анимации, если элемент виден
function scrollAnimate(e) {
  for (let i = 0; i < animItems.length; i++) {
    let animItem = animItems[i];
    if (visibleText(animItem)) {
      animItem.classList.add("animationActive");
      
    } else {
      animItem.classList.remove("animationActive");
    
    }
  }
  for (let i = 0; i < animItemsSvg.length; i++){
    let animItemSvg=animItemsSvg[i];
  if ((pageYOffset < scrolltop)&&(!hiddenText(animItemSvg))){
    animItemSvg.classList.remove("animationE");
    animItemSvg.classList.add("animationEhidden");
  }
  else {
    animItemSvg.classList.add("animationE");
   animItemSvg.classList.remove("animationEhidden");
  }

}
for (let i = 0; i < animItemsSvgN.length; i++){
    let animItemSvgN=animItemsSvgN[i];
    if ((pageYOffset < scrolltop)&&(!hiddenText(animItemSvgN))){
      animItemSvgN.classList.remove("animationN");
      animItemSvgN.classList.add("animationNhidden");
  
    }else{
      animItemSvgN.classList.add("animationN");
     animItemSvgN.classList.remove("animationNhidden");
    }
  }


}

//определение видимости элементов
function visibleText(el) {
  let elementBoundary = el.getBoundingClientRect();
  let top = elementBoundary.top;
  let bottom = elementBoundary.bottom;
  return ((top >=0) && ((bottom + 40) <= window.innerHeight));
}
function hiddenText(el) {
  let elementBoundary = el.getBoundingClientRect();
  let top = elementBoundary.top;
  let bottom = elementBoundary.bottom;
  return ((top >=0) && ((bottom + 70) <= window.innerHeight));
}
