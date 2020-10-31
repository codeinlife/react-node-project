import React from "react";
import { Link } from "react-router-dom";

export default function Header({ todoTotal }) {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <span className="navbar-brand">Total Todo List: {todoTotal}</span>
        <div>
          <Link to="/">Home</Link> | <Link to="/weather">Weather</Link>
        </div>
      </nav>
    </header>
  );
}
