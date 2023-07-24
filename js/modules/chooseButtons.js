var choose = document.querySelectorAll('.Cart__choose');
var choosePayment = document.querySelectorAll('.Cart__choosePayment');

choose.forEach(function(element, index) {
  element.addEventListener('click', switchButton);
});

function switchButton (event) {
  var targetElement = event.target;

  choose.forEach(function(element, index) {
    element.classList.remove('Cart__activeButton');
  });

  targetElement.classList.add('Cart__activeButton');
}


choosePayment.forEach(function(element, index) {
    element.addEventListener('click', switchButtonPayment);
});
  
function switchButtonPayment (event) {
  var targetElement = event.target;
  
  choosePayment.forEach(function(element, index) {
    element.classList.remove('Cart__activeButton');
  });
  
  targetElement.classList.add('Cart__activeButton');
}



