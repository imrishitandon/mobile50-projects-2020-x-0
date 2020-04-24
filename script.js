const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const itemCountSpan = document.getElementById('item-count');
const ulList = document.getElementById('todo-list')
const uncheckedCountSpan = document.getElementById('unchecked-count')
var itemCountValue = itemCountSpan.innerHTML;
var todoUncheckValue = uncheckedCountSpan.innerHTML;

function newTodo() {
		itemCountValue++;
  
		//CREATING A TEXT FIELD WITH ATTRIBUTES
		const todoText = document.createElement("INPUT");
		todoText.setAttribute("type", "text");
		todoText.setAttribute("placeholder", "Please enter a new TODO");
		todoText.setAttribute("style", "width: 500px;");
		
		//CREATING A BUTTON WITH ATTRIBUTES
		var todoButton = document.createElement("BUTTON");
		todoButton.setAttribute("id", ""+itemCountValue);
		todoButton.setAttribute("class", "TODO_DELETE");
		todoButton.setAttribute("onClick", "deleteToDo('todo"+itemCountValue+"')");
		
		//CREATING A TEXT INSIDE THE BUTTON
		var todoButtonText = document.createTextNode("X");
		todoButton.appendChild(todoButtonText);
		
		//CREATING A LIST ITEM TO BE CREATED UNDER UL (UNORDERED LIST)
		const liToDo = document.createElement("li");
		liToDo.setAttribute("id", "todo"+itemCountValue);
		liToDo.append(todoText);
		liToDo.append(todoButton);
		ulList.appendChild(liToDo);
		
		console.log(liToDo);
		itemCountSpan.innerHTML = itemCountValue; 
		//list.append('<li>TEST</li>');
		//alert('Value of itemCountSpan: '+itemCountValue);
}

function deleteToDo(elementName) {
	console.log(document.getElementById(elementName));
	document.getElementById(elementName).remove();
	todoUncheckValue++;
	itemCountValue--;
	uncheckedCountSpan.innerHTML = todoUncheckValue; 
	itemCountSpan.innerHTML = itemCountValue; 

}