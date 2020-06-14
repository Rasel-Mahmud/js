let inputForm = document.querySelector('.input-form');
let result = document.querySelector('.all-task > ul');

let list = [];
function rander(element){
  result.innerHTML = "";
  element.forEach((e)=>{
    let li = document.createElement('li');
    li.innerHTML = e;
    result.appendChild(li);
  })
}

inputForm.addEventListener('keyup', evt => {
  if(evt.which === 13 && evt.target.value !== "") {
    list.push(evt.target.value);
    console.log(list);
    rander(list);
    evt.target.value = "";
  }
});
