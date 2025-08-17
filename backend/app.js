const express = require("express");
const app = express();
const tasks = [];

app.use(express.json());

app.get("/tasks", (req, res) => {
  res.json(tasks);
});

app.delete("/tasks/:id", (req, res) => {
  tasks.splice(req.params.id, 1);
  res.sendStatus(200);
});

app.listen(3000, () => console.log("API rodando na porta 3000"));
