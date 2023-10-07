// Hacktoberfest 200-Line JavaScript Project

// Idea: A simple to-do list application

// Global variables
const todoList = [];
let todoId = 1;

// Function to add a new task
function addTask(task) {
  const newTask = {
    id: todoId++,
    task,
    completed: false,
  };
  todoList.push(newTask);
}

// Function to mark a task as completed
function completeTask(id) {
  const task = todoList.find((item) => item.id === id);
  if (task) {
    task.completed = true;
  }
}

// Function to list all tasks
function listTasks() {
  console.log("To-Do List:");
  for (const task of todoList) {
    const status = task.completed ? "[X]" : "[ ]";
    console.log(`${status} ${task.task}`);
  }
}

// Function to remove a task
function removeTask(id) {
  const index = todoList.findIndex((item) => item.id === id);
  if (index !== -1) {
    todoList.splice(index, 1);
  }
}

// Sample usage
addTask("Buy groceries");
addTask("Finish Hacktoberfest project");
completeTask(1);
listTasks();
removeTask(2);
listTasks();
