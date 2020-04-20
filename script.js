const task = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: false,
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')
var count = 0;
var uncheckedCount = 0;
var itemCount = 0;


function newTodo() {
  let task = document.querySelector(".textInput");
  if(task.value !== ""){
    count++
    let ul = document.querySelector(".todo-list");
    let li = document.createElement("li");
    let checkbox = document.createElement("input")
    checkbox.type = "checkbox"; 
    checkbox.name = "checkbox_" + count; 
    checkbox.value = "false"; 
    checkbox.id = "checkbox";
    checkbox.addEventListener("change", onCheckBoxChange);

    let button = document.createElement("input");
    button.type = "button";
    button.value = "X";
    button.id = "btn-delete";
    button.addEventListener("click", onDelete);

    li.setAttribute("id", "elements");
    li.setAttribute("class", "elements" + count);
    li.appendChild(document.createTextNode(task.value));
    li.appendChild(checkbox)
    li.appendChild(button)
    ul.appendChild(li);
    itemCount++;
    document.getElementById('task-count').innerText = "" + itemCount;
    uncheckedCount++;
    document.getElementById('uncheck-count').innerText = "" + uncheckedCount;
  }
  // document.querySelector(".textInput").value = "";
  // document.querySelector(".textInput").focus();
  task.value = "";
  task.focus();
}

function onCheckBoxChange(event){
  if(this.checked){
    //this.parentNode.parentNode.removeChild(this.parentNode);
    uncheckedCount--;
    document.getElementById('uncheck-count').innerText = "" + uncheckedCount;
  }
  else {
    uncheckedCount++;
    document.getElementById('uncheck-count').innerText = "" + uncheckedCount;
  }
}
function onDelete(){
  if(!this.parentNode.childNodes[1].checked){
  uncheckedCount--;
  document.getElementById('uncheck-count').innerText = "" + uncheckedCount;
}
  itemCount--;
  document.getElementById('task-count').innerText = "" + itemCount;
  this.parentNode.parentNode.removeChild(this.parentNode);
}

