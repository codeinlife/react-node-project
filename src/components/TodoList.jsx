import React from "react";
import TodoItem from "./TodoItem";

export default function TodoList({ todos, setTodos, loading, markComplete }) {
  let todoList = <div>fetching data...</div>;
  if (!loading) {
    todoList = todos.map((todo) => (
      <li
        className={`list-group-item ${todo.completed ? "completed" : ""}`}
        key={todo.id}
      >
        <TodoItem
          todo={todo}
          todos={todos}
          markComplete={markComplete}
          setTodos={setTodos}
        />
      </li>
    ));
  }

  return (
    <div className="row">
      <div className="col">
        <ul className="list-group">{todoList}</ul>
      </div>
    </div>
  );
}
