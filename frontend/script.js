async function fetchTasks() {
  try {
    const response = await fetch("http://localhost:3000/tasks");
    if (!response.ok) throw new Error("Erro ao buscar tarefas");
    const tasks = await response.json();
    document.getElementById("taskList").innerHTML = tasks
      .map(
        (task) =>
          `<li>${task.text} <button onclick="deleteTask(${task.id})">Excluir</button></li>`
      )
      .join("");
  } catch (err) {
    console.error("Houve um erro ao buscar tarefas:", err);
    document.getElementById("taskList").innerHTML =
      "<li>Erro ao carregar tarefas</li>";
  }
}

async function addTask() {
  const taskInput = document.getElementById("taskInput").value;
  try {
    if (!taskInput.trim()) throw new Error("Tarefa vazia");
    const connect = await fetch("http://localhost:3000/tasks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text: taskInput }),
    });
    if (!connect.ok) throw new Error("Erro ao adicionar a tarefa");

    document.getElementById("taskInput").value = "";
    fetchTasks();
  } catch (err) {
    console.error("Houve um erro:", err);
    alert("Erro ao adicionar a tarefa");
  }
}

async function deleteTask(id) {
  try {
    const response = await fetch(`http://localhost:3000/tasks/${id}`, {
      method: "DELETE",
    });
    if (!response.ok) throw new Error("Erro ao excluir a tarefa");

    fetchTasks();
  } catch (err) {
    console.error("Houve um erro ao excluir:", err);
    alert("Erro ao excluir a tarefa");
  }
}

fetchTasks();
