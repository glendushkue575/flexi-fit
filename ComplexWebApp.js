/*
   Filename: ComplexWebApp.js

   Description: This JavaScript file contains a complex and sophisticated code for a web application
   that allows users to create, update, and delete tasks. It utilizes various advanced JavaScript
   concepts and techniques such as Object-Oriented Programming, asynchronous operations, event
   handling, and DOM manipulation to provide a seamless and efficient user experience.

   Note: This code is not functional and serves as a template to demonstrate the complexity and
   creativity of the implementation.
*/

// Global Variables
let tasks = [];

// Task Class
class Task {
  constructor(id, title, description, completed) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.completed = completed;
  }
}

// Function to fetch tasks from the server
async function fetchTasks() {
  try {
    const response = await fetch('/api/tasks');
    const data = await response.json();
    tasks = data.tasks;
    displayTasks();
  } catch (error) {
    console.error('Error fetching tasks:', error);
  }
}

// Function to display tasks in a table
function displayTasks() {
  const tableBody = document.querySelector('#task-table tbody');
  tableBody.innerHTML = '';

  tasks.forEach((task) => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${task.id}</td>
      <td>${task.title}</td>
      <td>${task.description}</td>
      <td>${task.completed ? 'Completed' : 'Pending'}</td>
      <td>
        <button class="btn btn-edit" data-id="${task.id}">Edit</button>
        <button class="btn btn-delete" data-id="${task.id}">Delete</button>
      </td>
    `;
    tableBody.appendChild(row);
  });

  addTaskEventListeners();
}

// Function to add event listeners to Edit and Delete buttons
function addTaskEventListeners() {
  const editButtons = document.querySelectorAll('.btn-edit');
  editButtons.forEach((button) => {
    button.addEventListener('click', openEditModal);
  });

  const deleteButtons = document.querySelectorAll('.btn-delete');
  deleteButtons.forEach((button) => {
    button.addEventListener('click', deleteTask);
  });
}

// Function to open the Edit task modal
function openEditModal(event) {
  const taskId = event.target.dataset.id;
  const task = tasks.find((task) => task.id === taskId);

  // Populate the modal with task details
  const editModal = document.querySelector('#edit-modal');
  const titleInput = editModal.querySelector('#edit-title');
  const descriptionInput = editModal.querySelector('#edit-description');
  const completedInput = editModal.querySelector('#edit-completed');

  titleInput.value = task.title;
  descriptionInput.value = task.description;
  completedInput.checked = task.completed;

  // Show the modal
  editModal.classList.add('active');
}

// Function to update a task
async function updateTask(event) {
  event.preventDefault();
  const taskId = event.target.dataset.id;
  const task = tasks.find((task) => task.id === taskId);

  const updatedTitle = document.querySelector('#edit-title').value;
  const updatedDescription = document.querySelector('#edit-description').value;
  const updatedCompleted = document.querySelector('#edit-completed').checked;

  // Send updated task details to the server
  try {
    await fetch(`/api/tasks/${taskId}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        title: updatedTitle,
        description: updatedDescription,
        completed: updatedCompleted,
      }),
    });

    task.title = updatedTitle;
    task.description = updatedDescription;
    task.completed = updatedCompleted;

    // Close the modal and update the table
    const editModal = document.querySelector('#edit-modal');
    editModal.classList.remove('active');
    displayTasks();
  } catch (error) {
    console.error('Error updating task:', error);
  }
}

// Function to delete a task
async function deleteTask(event) {
  const taskId = event.target.dataset.id;

  try {
    await fetch(`/api/tasks/${taskId}`, { method: 'DELETE' });

    tasks = tasks.filter((task) => task.id !== taskId);
    displayTasks();
  } catch (error) {
    console.error('Error deleting task:', error);
  }
}

// Event listener for Add Task form submission
document.querySelector('#add-task-form').addEventListener('submit', async (event) => {
  event.preventDefault();

  const newTaskTitle = document.querySelector('#new-task-title').value;
  const newTaskDescription = document.querySelector('#new-task-description').value;

  // Submit new task to the server
  try {
    const response = await fetch('/api/tasks', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        title: newTaskTitle,
        description: newTaskDescription,
        completed: false,
      }),
    });

    const newTask = await response.json();

    tasks.push(new Task(newTask.id, newTask.title, newTask.description, newTask.completed));
    displayTasks();
  } catch (error) {
    console.error('Error adding task:', error);
  }
});

// Fetch initial tasks from the server on page load
fetchTasks();