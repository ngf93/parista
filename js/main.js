function toggleActive(btn){
  btn.classList.toggle('active');
}

var elements = document.querySelectorAll('.hoverMenu');
function showHoverMenu(id){
  for (let elem of elements) {
    elem.style.display = "none";
  }
  document.getElementById(id).style.display = "block";
}
function hideHoverMenu(){
  for (let elem of elements) {
    elem.style.display = "none";
  }
}