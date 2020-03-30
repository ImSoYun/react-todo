import React, { useState } from "react";
import ReactDOM from "react-dom";

import Form from "./Form";
import TodoList from "./TodoList";
import "./styles.css";

const App = () => {
  const [todos, setTodos] = useState([]);
  const onSubmit = todo => {
    setTodos([...todos, todo]);
  };

  const DeleteTodoList = id => {
    const newTodods = [...todos];
    newTodods.splice(id, 1);
    setTodos(newTodods);
  };

  return (
    <div className="totalWrap">
      <p>TODO List 만들기</p>
      <TodoList todos={todos} DeleteTodoList={DeleteTodoList} />
      <Form onSubmit={onSubmit} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
