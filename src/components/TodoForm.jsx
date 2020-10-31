import React from "react";

export default function TodoForm() {
  return (
    <div className="row">
      <div className="col">
        <form className="form-inline">
          <input className="form-control mb-2 mr-sm-2"></input>
          <button className="btn btn-primary mb-2">Save</button>
        </form>
      </div>
    </div>
  );
}
