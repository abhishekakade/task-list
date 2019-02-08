// Define UI Vars 
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// Load all event listeners 
loadEventListeners();

// Load all event listeners 
function loadEventListeners() {
  // Add task event 
  form.addEventListener('submit', addTask);

  // Remove task event 
  taskList.addEventListener('click', removeTask);

  // Clear task event 
  clearBtn.addEventListener('click', clearTasks);
  
  // Filter tasks event 
  filter.addEventListener('keyup', filterTasks);
}

function addTask(e) {
  if(taskInput.value === '') {
    alert('Add a task!');
    e.preventDefault();
  }

  else {

    // Create li element 
    const li = document.createElement('li');
    // Add class to li 
    li.className = 'collection-item';
    // Create text node and append it to li 
    li.appendChild(document.createTextNode(taskInput.value));
    // Create new link element 
    const link = document.createElement('a');
    // Add class to link 
    link.className = 'delete-item secondary-content';
    // Adding FontAwesome icon to link 
    link.innerHTML = '<i class="fas fa-times"></i>'
    // Append link to li 
    li.appendChild(link);
    
    // Append li to ul 
    taskList.appendChild(li);
    
    // Clear input after submit 
    taskInput.value = '';
    
    e.preventDefault();
  }
}

// Remove task 
function removeTask(e) {
  if(e.target.parentElement.classList.contains('delete-item')) {

    if(confirm('Are you sure you want to delete this task?')) {
      e.target.parentElement.parentElement.remove();
    }
  }
}

// Clear tasks 
function clearTasks() {
  while(taskList.firstChild) {
    taskList.removeChild(taskList.firstChild);
  }
}

// Filter tasks 
function filterTasks(e) {
  const text = e.target.value.toLowerCase();
  // console.log(text);

  document.querySelectorAll('.collection-item').forEach(function(task) {
    const item = task.firstChild.textContent;
    // console.log(item);

    // Show the task if the index is NOT NEGATIVE 1 which means that the task is inside the node list 
    if(item.toLowerCase().indexOf(text) !== -1) {
      task.style.display = 'block';
    }
    else {
      task.style.display = 'none';
    }
  });
}