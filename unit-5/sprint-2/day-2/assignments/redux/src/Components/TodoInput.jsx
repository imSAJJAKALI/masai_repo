import React, { useState } from "react";

const TodoInput = ({ handleButton }) => {
  const [title, setTitle] = useState('');

  const handleText = (e) => {
    setTitle(e.target.value);
  }

  const handleClick = () => {
    const task = {
      title: title,
      status: false,
    };

    handleButton(task);
    setTitle('');
  }

  return (
    <div>
      <input
        type="text"
        value={title}
        onChange={handleText}
        data-testid="todo-input"
      />
      <button onClick={handleClick} data-testid="add-button">
        Add Todo
      </button>
    </div>
  );
};

export default TodoInput;
