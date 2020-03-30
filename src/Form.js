import React, { useState } from "react";

const Form = ({ onSubmit }) => {
  const [todo, setTodo] = useState("");
  const handleSubmit = e => {
    e.preventDefault();
    setTodo("");
    onSubmit(todo);
  };

  const onChange = e => setTodo(e.target.value);

  return (
    <form className="formWrap" onSubmit={handleSubmit}>
      <input
        autoFocus
        value={todo}
        onChange={onChange}
        placeholder="리스트를 입력해주세요."
        type="text"
      />
    </form>
  );
}

export default Form;