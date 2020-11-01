import React from "react";
import TodoForm from "../TodoForm";
import TodoList from "../TodoList";

function Content({
  todos,
  setTodos,
  loading,
  markComplete,
  inputText,
  setInputText,
}) {
  return (
    <div className="todo-content">
      <TodoForm
        todos={todos}
        setTodos={setTodos}
        inputText={inputText}
        setInputText={setInputText}
      />
      <TodoList
        todos={todos}
        setTodos={setTodos}
        loading={loading}
        markComplete={markComplete}
      />
    </div>
  );
}

export default Content;
