import React, { useState } from "react";
import addImage from "../image/plus.svg";

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
      <form className="flex mb-3" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="add todo"
          value={input}
          name="text"
          className="input border border-info"
          onChange={handleChange}
        />
        <button className=" btn btn-info ">
          <img src={addImage} className=""/>
        </button>
      </form>
    </div>
  );
}

export default TodoForm;
