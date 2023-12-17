import React, { useEffect, useState } from "react";
import axios from "axios";
import TodoInput from "./TodoInput";

const Todo = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/todos`)
      .then((response) => {
        setTodos(response.data);
      })
      .catch((error) => {
        console.error("Error fetching todos:", error);
      });
  }, []);

  const handleAddTodo = (newTodo) => {
    axios.post(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/todos`, newTodo)
      .then((response) => {
        setTodos([...todos, response.data]);
      })
      .catch((error) => {
        console.error("Error adding a new todo:", error);
      });
  }

  return (
    <div>
      <TodoInput handleButton={handleAddTodo} />
      <div data-testid="todos-wrapper">
        {todos.map((todo) => (
          <p key={todo.id}>
            {todo.title} - {todo.status ? "True" : "False"}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Todo;
