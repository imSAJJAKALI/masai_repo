import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todos }) => {
  return (
    <div data-testid="todo-list">
      {todos.length > 0 &&
        todos.map((el, index) => {
          return <TodoItem key={index} {...el} />;
        })}
    </div>
  );
};
export default TodoList;
