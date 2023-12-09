import React, { useState } from "react";

function TodoForm(props) {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
    });
    setInput("");
  };

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <div className="">
      <form className="flex" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="add todo"
          value={input}
          name="text"
          className="input"
          onChange={handleChange}
        />
        <button className=" btn btn-info ">add</button>
      </form>
    </div>
  );
}

export default TodoForm;
