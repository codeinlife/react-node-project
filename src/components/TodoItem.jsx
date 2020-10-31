import React from "react";

export default function TodoItem({ todo, markComplete }) {
  const changeStatus = (id) => {
    markComplete(id);
  };
  return (
    <>
      <input type="checkbox" onChange={() => changeStatus(todo.id)} />{" "}
      {todo.title}
      <div className="float-right">
        <button className="btn btn-sm btn-danger">Delete</button>
      </div>
    </>
  );
}
