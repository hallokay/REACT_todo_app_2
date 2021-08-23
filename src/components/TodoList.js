import React, { useState } from "react";
import TodoForm from "./TodoForm";

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = todo => {
    if(!todo.text || todo.text.trim()) {
        return
    }

    const newTodos = [todo, ...todos];
    setTodos(newTodos)

  }

  return (
    <div>
      <h1>오늘 뭐할꺼야?</h1>
      <TodoForm onSubmit={addTodo} />
    </div>
  );
};


export default TodoList;
