import React from "react";
import TodoForm from "../TodoForm";
import TodoList from "../TodoList";

function Content({ todos, loading, markComplete }) {
  return (
    <div className="todo-content">
      <TodoForm />
      <TodoList todos={todos} loading={loading} markComplete={markComplete} />
    </div>
  );
}

export default Content;
