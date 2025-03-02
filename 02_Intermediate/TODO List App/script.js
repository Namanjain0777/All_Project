document.addEventListener("DOMContentLoaded", () => {
  const todoInput = document.getElementById("todo-input");
  const addTaskButton = document.getElementById("add-task-btn");
  const todoList = document.getElementById("todo-list");
  const clearAllButton = document.getElementById("clear-all-btn");
  const themeToggle = document.getElementById("theme-toggle");

  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  let isLightTheme = JSON.parse(localStorage.getItem("isLightTheme")) || false;

  if (isLightTheme) {
    document.body.classList.add("light-theme");
    themeToggle.textContent = "🌞";
  }

  tasks.forEach((task) => renderTask(task));

  addTaskButton.addEventListener("click", addTask);
  clearAllButton.addEventListener("click", clearAllTasks);
  themeToggle.addEventListener("click", toggleTheme);

  function addTask() {
    const taskText = todoInput.value.trim();
    if (taskText === "") return;

    const newTask = {
      id: Date.now(),
      text: taskText,
      completed: false,
    };

    tasks.push(newTask);
    saveTasks();
    renderTask(newTask);
    todoInput.value = "";
  }

  function renderTask(task) {
    const li = document.createElement("li");
    li.setAttribute("data-id", task.id);
    if (task.completed) li.classList.add("completed");

    li.innerHTML = `
      <span>${task.text}</span>
      <button>Delete</button>
    `;

    li.querySelector("span").addEventListener("click", () => toggleTaskCompletion(task, li));
    li.querySelector("button").addEventListener("click", () => deleteTask(task, li));

    todoList.appendChild(li);
  }

  function toggleTaskCompletion(task, li) {
    task.completed = !task.completed;
    li.classList.toggle("completed");
    saveTasks();
  }

  function deleteTask(task, li) {
    tasks = tasks.filter((t) => t.id !== task.id);
    li.remove();
    saveTasks();
  }

  function clearAllTasks() {
    tasks = [];
    todoList.innerHTML = "";
    saveTasks();
  }

  function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }

  function toggleTheme() {
    isLightTheme = !isLightTheme;
    document.body.classList.toggle("light-theme", isLightTheme);
    themeToggle.textContent = isLightTheme ? "🌞" : "🌙";
    localStorage.setItem("isLightTheme", JSON.stringify(isLightTheme));
  }
});
