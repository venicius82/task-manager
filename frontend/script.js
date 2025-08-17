async function fetchTasks() {
  const response = await fetch("http://localhost:3000/tasks");
  const tasks = await response.json();
  document.getElementById("taskList").innerHTML = tasks
    .map((task) => `<li>${task.text}</li>`)
    .join("");
}

fetchTasks();
