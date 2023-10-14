// Get elements from the DOM
const newTaskInput = document.getElementById('newTask');
const taskList = document.getElementById('taskList');

// Function to add a new task
function addTask() {
    const taskText = newTaskInput.value;

    if (taskText.trim() !== '') {
        // Create a new list item
        const listItem = document.createElement('li');
        listItem.innerHTML = `${taskText} <button onclick="removeTask(this)">Remove</button>`;

        // Add the new list item to the task list
        taskList.appendChild(listItem);

        // Clear the input field
        newTaskInput.value = '';
    }
}

// Function to remove a task
function removeTask(button) {
    const listItem = button.parentNode;
    taskList.removeChild(listItem);
}
