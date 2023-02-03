const todoForm = document.querySelector("#todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.querySelector("#todo-list");

let todos = [];

function setItemToLocalStorage() {
  localStorage.setItem("todos", JSON.stringify(todos));
}

function onClickDelete(event) {
  const targetElement = event.target.parentElement;
  targetElement.remove();
}

function onCreateTodoList(newTodo) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  const btn = document.createElement("button");
  li.appendChild(span);
  li.appendChild(btn);
  span.innerText = newTodo;
  btn.innerText = "🧹";
  todoList.appendChild(li);
  btn.addEventListener("click", onClickDelete);
}

function onSubmitTodo(event) {
  event.preventDefault();
  const newTodo = todoInput.value;
  todoInput.value = "";
  todos.push(newTodo);
  onCreateTodoList(newTodo);
  setItemToLocalStorage();
}

todoForm.addEventListener("submit", onSubmitTodo);

const parsedSavedTodos = JSON.parse(localStorage.getItem("todos"));

if (parsedSavedTodos !== null) {
  todos = parsedSavedTodos;
  parsedSavedTodos.forEach(onCreateTodoList);
}
