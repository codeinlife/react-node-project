import React from "react";
import { v4 as uuidv4 } from "uuid";

export default function TodoForm({ todos, setTodos, inputText, setInputText }) {
  const changeHandler = (e) => {
    setInputText(e.target.value);
  };

  const clickHandler = (e) => {
    e.preventDefault();
    if (inputText !== "") {
      setTodos([
        { id: uuidv4(), title: inputText, completed: false },
        ...todos,
      ]);
      setInputText("");
    }
  };

  return (
    <form>
      <div className="input-group mb-3">
        <input
          type="text"
          value={inputText}
          className="form-control"
          placeholder="Add todo..."
          onChange={changeHandler}
        />
        <div className="input-group-append">
          <button
            className="btn btn-primary"
            type="button"
            onClick={clickHandler}
          >
            Save
          </button>
        </div>
      </div>
    </form>
  );
}
