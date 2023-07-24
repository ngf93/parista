// Найти кнопку, которая будет открывать модальное окно
var btn = document.getElementById("modalOpenBtn");
// Найти модальное окно
var modal = document.getElementById("modalHeader");
// Найти кнопку закрытия модального окна
var span = document.getElementById("modalCloseBtn");
// Функция для открытия модального окна
function openModal() {
  modal.style.display = "block";
  btn.style.display = "none";
  span.style.display = "block";
}
// Функция для закрытия модального окна
function closeModal() {
  modal.style.display = "none";
  btn.style.display = "block";
  span.style.display = "none";
}

btn.onclick = openModal;
span.onclick = closeModal;

window.onclick = function(event) {
  if (event.target == modal) {
    closeModal();
  }
}

var btnCart = document.getElementById("ModalCartOpen");
var modalCart = document.getElementById("ModalCart");

function openModalCart() {
  modalCart.style.display = "block";
}

function closeModalCart() {
  modalCart.style.display = "none";
}

if (btnCart !== null) {
  btnCart.onclick = openModalCart;
}

window.onclick = function(event) {
  if (event.target == modalCart) {
    closeModalCart();
  }
}


const loginButton = document.getElementById("loginButton");
const login = document.getElementById("login");
const LoginContent = document.getElementById("LoginContent");
const RegContent = document.getElementById("RegContent");
const LoginContentButton = document.getElementById("LoginContentButton");
const RegContentButton = document.getElementById("RegContentButton");


function openModalLogin() {
  login.classList.add('opened')
}

function closeModalLogin() {
  login.classList.remove('opened')
}

function switchToReg() {
  RegContentButton.classList.add('Login__buttonActive');
  LoginContentButton.classList.remove('Login__buttonActive');
  LoginContent.classList.remove('opened');
  RegContent.classList.add('opened');
}

function switchToLogin() {
  LoginContentButton.classList.add('Login__buttonActive');
  RegContentButton.classList.remove('Login__buttonActive');
  LoginContent.classList.add('opened');
  RegContent.classList.remove('opened');
}

if (login !== null) {
  loginButton.onclick = openModalLogin;
  RegContentButton.onclick = switchToReg;
  LoginContentButton.onclick = switchToLogin;
}

window.onclick = function(event) {
  if (event.target == login) {
    closeModalLogin();
  }
}