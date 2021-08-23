import React, { useState } from "react";

const TodoForm = ({ addTodo }) => {
  const [inputValue, setInputValue] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    addTodo.onSubmit({
      id: Math.floor(Math.random() * 1000),
      text: inputValue,
    });

    setInputValue("");
  };

  const onChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div>
      <form className="todo_form" onSubmit={onSubmit}>
        <input
          className="todo_input"
          type="text"
          name="text"
          placeholder="Add a todo"
          value={inputValue}
          onChange={onChange}
        />
        <button className="todo_btn">Add Todo</button>
      </form>
    </div>
  );
};

export default TodoForm;
