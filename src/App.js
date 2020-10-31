import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./sass/style.css";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Content from "./components/layout/Content";
import useFetch from "./components/useFetch";
import Weather from "./components/Weather";

export default function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState();

  const loading = useFetch(setTodos, "http://localhost:3001/json");

  const markComplete = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      })
    );
  };

  return (
    <Router>
      <div className="wrapper">
        <Header todoTotal={todos.length} />
        <Route
          exact
          path="/"
          render={(props) => (
            <React.Fragment>
              <Content
                todos={todos}
                setTodos={setTodos}
                loading={loading}
                markComplete={markComplete}
              />
            </React.Fragment>
          )}
        />
        <Route path="/weather" component={Weather} />
        <Footer byWho={"By toycrane"} />
      </div>
    </Router>
  );
}
