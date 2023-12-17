const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000;

app.use(express.json());

// Read the initial structure of todos from db.json
const dbPath = './db.json';
let todos = { todos: [] };

fs.readFile(dbPath, 'utf8', (err, data) => {
  if (!err) {
    try {
      todos = JSON.parse(data);
    } catch (error) {
      console.error('Error parsing db.json:', error);
    }
  } else {
    console.error('Error reading db.json:', err);
  }
});

// Helper function to save todos to db.json
function saveTodos() {
  fs.writeFile(dbPath, JSON.stringify(todos), 'utf8', (err) => {
    if (err) {
      console.error('Error saving todos:', err);
    }
  });
}

// GET request to retrieve the current todos
app.get('/', (req, res) => {
  res.status(200).json(todos);
});

// POST request to add a new todo
app.post('/', (req, res) => {
  const { id, task, status } = req.body;

  if (typeof id !== 'number' || typeof task !== 'string' || typeof status !== 'boolean') {
    return res.status(400).json('Invalid argument');
  }

  todos.todos.push({ id, task, status });
  saveTodos();

  res.status(200).json(todos);
});

// PUT request to update a todo
app.put('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const { task, status } = req.body;

  if (typeof task !== 'string' || typeof status !== 'boolean') {
    return res.status(400).json('Invalid argument');
  }

  const todo = todos.todos.find((todo) => todo.id === id);

  if (!todo) {
    return res.status(400).json('Invalid argument');
  }

  todo.task = task;
  todo.status = status;
  saveTodos();

  res.status(200).json(todos);
});

// DELETE request to delete a todo
app.delete('/:id', (req, res) => {
  const id = parseInt(req.params.id);

  const index = todos.todos.findIndex((todo) => todo.id === id);

  if (index === -1) {
    return res.status(400).json('Invalid argument');
  }

  todos.todos.splice(index, 1);
  saveTodos();

  res.status(200).json(todos);
});

// Handle non-existent files and directories
app.use((req, res) => {
  res.status(404).json('Not found');
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});

module.exports = app;
