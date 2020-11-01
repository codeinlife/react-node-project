import React from "react";

export default function TodoItem({ todo, todos, setTodos, markComplete }) {
  const changeStatus = (id) => {
    markComplete(id);
  };

  const deleteHandler = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <>
      <input type="checkbox" onChange={() => changeStatus(todo.id)} />{" "}
      {todo.title}
      <div className="float-right">
        <button
          className="btn btn-sm btn-danger"
          onClick={() => deleteHandler(todo.id)}
        >
          Delete
        </button>
      </div>
    </>
  );
}
