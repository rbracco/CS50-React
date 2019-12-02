const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')
const nextItem = document.getElementById('todo')

function newTodo() {
  next = '<li>' + nextItem.value + '</li>'
  list.innerHTML += next;
  var value = parseInt(itemCountSpan.value, 10);
  value = isNaN(value) ? 0 : value;
  value++;
  itemCountSpan.value = value;
  itemCountSpan.innerText = value;
 } 
