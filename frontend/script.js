async function fetchTasks() {
  const response = await fetch("http://localhost:3000/tasks");
  const tasks = await response.json();
  document.getElementById("taskList").innerHTML = tasks
    .map((task) => `<li>${task.text}</li>`)
    .join("");
}

async function addTask() {
  const taskInput = document.getElementById("taskInput").value;
  try {
    const connect = await fetch("http://localhost:3000/tasks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text: taskInput }),
    });
    if (!connect.ok) throw new Error("Erro ao adicionar a tarefa");

    fetchTasks();
  } catch (err) {
    console.error("Houve um erro.");
  }
}

fetchTasks();
