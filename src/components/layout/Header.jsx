import React from "react";
import { Link } from "react-router-dom";

export default function Header({ todoTotal }) {
  return (
    <header style={headerStyle}>
      <div>Total Todo List: {todoTotal}</div>
      <div>
        <Link to="/">Home</Link> | <Link to="/weather">Weather</Link>
      </div>
    </header>
  );
}

const headerStyle = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  backgroundColor: "#f8f9fa",
  height: "70px",
  fontSize: "1.2em",
  padding: "20px",
};
