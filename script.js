const todoInput = document.getElementById('newTodoInput');
const addButton = document.getElementById('addTodoBtn');
const todoList = document.getElementById('todoList');

addButton.addEventListener('click', () => {
  const todoText = todoInput.value.trim(); // Remove leading/trailing whitespace
  if (todoText !== '') {
    const li = document.createElement('li');
    li.textContent = todoText;
    todoList.appendChild(li);
    todoInput.value = ''; // Clear input
  }
});
