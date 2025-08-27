const express = require("express");
const cors = require("cors");
const app = express();
const tasks = [];
let taskId = 0;

app.use(cors());
app.use(express.json());

app.get("/tasks", (req, res) => {
  res.json(tasks);
});

app.post("/tasks", (req, res) => {
  const task = { id: taskId++, ...req.body };
  tasks.push(task);
  res.sendStatus(201);
});

app.delete("/tasks/:id", (req, res) => {
  tasks.splice(req.params.id, 1);
  res.sendStatus(200);
});

app.listen(3000, () => console.log("API rodando na porta 3000"));
