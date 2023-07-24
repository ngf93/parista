// window.onload = function(){
//     slideOne();
//     slideTwo();
//   }
//   let sliderOne = document.getElementById("rangeMin");
//   let sliderTwo = document.getElementById("rangeMax");
//   let displayValOne = document.getElementById("range1");
//   let displayValTwo = document.getElementById("range2");
//   let minGap = 0;
//   let sliderTrack = document.querySelector(".Category__inputProgress");
//   let sliderMaxValue = document.getElementById("rangeMin").max;
//   function slideOne(){
//     if(parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap){
//         sliderOne.value = parseInt(sliderTwo.value) - minGap;
//     }
//     displayValOne.textContent = sliderOne.value;
//     fillColor();
//     console.log(sliderTwo.value)
//   }
//   function slideTwo(){
//     if(parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap){
//         sliderTwo.value = parseInt(sliderOne.value) + minGap;
//     }
//     displayValTwo.textContent = sliderTwo.value;
//     fillColor();
//   }
//   function fillColor(){
//     percent1 = (sliderOne.value / sliderMaxValue) * 100;
//     percent2 = (sliderTwo.value / sliderMaxValue) * 100;

//   }