import React, { useState } from "react";
import addImage from "../image/plus.svg";
import toast, { Toaster } from "react-hot-toast";

function TodoForm(props) {
  const [input, setInput] = useState("");
  const notify = () => toast("Adding the character was successful");

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
        <button onClick={notify} className=" btn btn-info ">
          <Toaster position="top-left" reverseOrder={false} />
          <img src={addImage} className="" alt="" />
        </button>
      </form>
    </div>
  );
}

export default TodoForm;
