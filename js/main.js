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



function handleMinRange(inp){
  inp.value=Math.min(inp.value, inp.parentNode.childNodes[5].value-1);
  let value=(100/(parseInt(inp.max)-parseInt(inp.min)))*parseInt(inp.value)-(100/(parseInt(inp.max)-parseInt(inp.min)))*parseInt(inp.min);
  let children = inp.parentNode.childNodes[1].childNodes;
  children[1].style.width=value+'%';
  children[5].style.left=value+'%';
  children[7].style.left=value+'%';
  children[11].style.left=value+'%';
  children[11].childNodes[1].innerHTML=inp.value;
}
function handleMaxRange(inp){
  inp.value=Math.max(inp.value, inp.parentNode.childNodes[3].value-(-1));
  let value=(100/(parseInt(inp.max)-parseInt(inp.min)))*parseInt(inp.value)-(100/(parseInt(inp.max)-parseInt(inp.min)))*parseInt(inp.min);
  let children = inp.parentNode.childNodes[1].childNodes;
  children[3].style.width=(100-value)+'%';
  children[5].style.right=(100-value)+'%';
  children[9].style.left=value+'%';
  children[13].style.left=value+'%';
  children[13].childNodes[1].innerHTML=inp.value;
}


function toggleClass(elem){
  elem.nextElementSibling.classList.toggle('d-none');
}


const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))